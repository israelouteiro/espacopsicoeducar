import styled from 'styled-components'  
import { PrimaryColor } from 'ui/styled';
 
export const DashboardHeaderContainer = styled.div.attrs({ 
})`           
    height: 60px;
    width: 100%;

    background: var(--primary-color);
    background: linear-gradient(45deg, rgba(${PrimaryColor}, .45) 0%, rgba(${PrimaryColor}, .6) 25%, rgba(${PrimaryColor}, .75) 50%, rgba(${PrimaryColor}, .9) 75%, rgba(${PrimaryColor}, 1) 100%);
    padding: 0 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DashboardHeaderAction = styled.div.attrs({ 
})`           
    color: var(--white-color);
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AppLogo = styled.img.attrs({ 
    src:`/logo1024.png`,
    alt:"logo-icon",
    height:50
})`            
`;

export const DashboardHeaderActionIcon = styled.img.attrs({ 
})`           
    margin-right: 10px;
`;

export const DashboardMenuContainer = styled.div.attrs({ 
})`           
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    background: var(--shadow-color);
`;

export const DashboardMenu = styled.div.attrs({ 
    className:'menu-contant'
})`           
    max-width: 389px;
    background: var(--white-color);
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const DashboardMenuHeader = styled.div.attrs({ 
})`           
    height: 60px;
    width: 100%; 
    display: flex;
    align-items: center;
    padding: 0 20px;

    text-transform: uppercase;
    font-size: 15px;
    color: var(--white-color);
    cursor: pointer;

    background: var(--primary-color);
    background: linear-gradient(48deg, rgba(${PrimaryColor},1) 0%, rgba(${PrimaryColor},.9) 21%, rgba(${PrimaryColor},.75) 49%, rgba(${PrimaryColor},.6) 87%, rgba(${PrimaryColor},.45) 100%);
`;

export const DashboardMenuHeaderIcon = styled.img.attrs({ 
})`           
    margin-right: 20px;
    cursor: pointer;
`;

export const DashboardMenuHeaderUserContent = styled.div.attrs({ 
})`           
    padding: 27px 25px;
    border-bottom: 1px solid var(--lightshadow-color);
    margin-bottom: 28px;
`;

export const DashboardMenuHeaderUserImage = styled.div.attrs({ 
})`           
    width: 160px;
    height: 160px; 
    background: var(--grey-color) url(/logo1024.png) no-repeat center center / cover;
    margin: 0 auto 12px;
    overflow: hidden;
`;

export const DashboardMenuHeaderUserText = styled.div.attrs({ 
})`           
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-color);
    margin-bottom: 12px; 
`;

export const DashboardMenuOption = styled.div.attrs({ 
})`           
    padding: 20px 30px;
    font-size: 15px;
    color: var(--grey-color);
    cursor: pointer; 

    &:hover{
        text-decoration: underline;
    }
    
    ${
        props => props.active ? `
            background: var(--primary-color);
            font-size: 15px;
            font-weight: bold;
            color: var(--white-color);
        ` : ``
    }
`;

export const DashboardMenuContent = styled.div.attrs({ 
})` 
    flex:1;
`;

export const DashboardMenuFooter = styled.div.attrs({ 
})`
    padding: 20px;
`;

export const DashboardVersionContent = styled.div.attrs({ 
})` 
    margin: 24px 0;
`;

export const DashboardVersionText = styled.div.attrs({ 
})`
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-color);
    text-align: center; 
`;
