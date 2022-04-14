import { ReadObject, SaveObject } from './storage'

export const DEVELOPMENT_MODE = true 
export const API_ENDPOINT ='https://boilerplate.xapps-staging.com/'

export const GetHeaders = async authenticated => {
	const headers = { 'Content-Type': 'application/json' }
	const authentication = await ReadObject('authentication')
	if (authenticated && authentication.jwt) {
		headers.Authorization = `Bearer ${authentication.jwt}`
	}
	return { headers }
}

export const ServerFetch = async (url, options, authenticated) => {
	const { headers } = await GetHeaders(authenticated)
	// console.info(url, options, headers)
	try{
		const response = await fetch(url, { ...options, headers }) 
		if (response.statusCode === 403 && authenticated) {
			await SaveObject('authentication', {})
		}
		try{
			return await response.json()
		}catch(err){
			console.log('ServerParseError', err)
			return response
		}  
	}catch(error){
		console.log('ServerFetchError', error)
		return false;
	}
}

export const GET = async (path, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'GET'
		},
		authenticated
	)
}

export const POST = async (path, body, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'POST',
			body: JSON.stringify(body)
		},
		authenticated
	)
}

export const PUT = async (path, body, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'PUT',
			body: JSON.stringify(body)
		},
		authenticated
	)
}

export const DELETE = async (path, authenticated = false) => {
	return await ServerFetch(
		`${API_ENDPOINT}${path}`,
		{
			method: 'DELETE'
		},
		authenticated
	)
} 

export const ReadAddressesByZipCode = async (zipCode) => {
    try{
        let result = await fetch(`https://viacep.com.br/ws/${ zipCode }/json/`);
        return result.json();
    }catch(err){ return false; }
}



export const PostImage = async (fileToUpload) => {
    const formData = new FormData()
    formData.append('file', fileToUpload, fileToUpload.name)  
    let { headers } = await GetHeaders(true) 
    delete headers['Content-Type']
    let response = await fetch(`${API_ENDPOINT}/upload`, { method: 'POST', body: formData, headers });   
    let responseJson = await response.json()  
    return responseJson; 
}
  
export const PrepareImageFile = (image) => {
	let btc = window.atob(image.source)
	let btn = new Array(btc.length);
	for (var i = 0; i < btc.length; i++) {
		btn[i] = btc.charCodeAt(i);
	}
	var bta = new Uint8Array(btn);
	let boobs = new Blob([bta], {type: 'image/png' } );
	return new File([boobs], `${ image.filename }`)
} 

export const UploadImage = (file) => {
	return new Promise((resolve, reject) => { 
		let reader = new FileReader();
		reader.onload = async () => {
			let source = `${ reader.result }`.split(',')[1]
			let image = {
				filename: file.name,
				filetype: file.type,
				source
			}
			let thefile = PrepareImageFile(image);
			let result = await PostImage(thefile);

			resolve(result);
		};
		reader.readAsDataURL(file);
	})
} 
 
export const parseStrapiImage = url => {
    return !url ? '' : url.indexOf('://') !== -1 ? url : `${API_ENDPOINT.replace('/api', '')}${url}`
}