import styled from 'styled-components'

export const Content = styled.div.attrs({
})`
    --primary-color: #3f79e6;
    --secondary-color: #234e83;
    --accent-color: #48c3b8;

    --white-color: #ffffff;
    --black-color: #111827;
    --grey-color: #5f6f83;
    --backgroundgrey-color: #e9f0fb;
    --lightgrey-color: #8391a3;
    --shadow-color: rgba(28, 56, 102, 0.2);
    --lightshadow-color: rgba(28, 56, 102, 0.06);

    --lp-bg: #f7f9fd;
    --lp-surface: #ffffff;
    --lp-heading: #1e3656;
    --lp-ring: rgba(63, 121, 230, 0.14);

    background:
        radial-gradient(circle at 100% 12%, rgba(63, 121, 230, 0.09) 0%, transparent 36%),
        linear-gradient(180deg, #f9fbff 0%, var(--lp-bg) 100%);
    color: var(--grey-color);
    font-family: 'Nunito Sans', 'Raleway', 'Trebuchet MS', sans-serif;
    overflow: hidden;

    section[data-land-section],
    #contato{
        scroll-margin-top: 104px;
    }

    @media(max-width: 1100px){
        section[data-land-section],
        #contato{
            scroll-margin-top: 92px;
        }
    }
`

export const ContentBody = styled.div.attrs({
})`
    min-height: 47vh;
`

export const ContentAnimation = styled.div.attrs({
})`
    padding: 160px 0 160px;
`
