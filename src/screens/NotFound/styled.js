import styled from 'styled-components'

export const Content = styled.section.attrs({
})`
    position: relative;
    padding: 138px 0 110px;
    min-height: 72vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background:
        radial-gradient(circle at 88% 18%, rgba(78, 132, 223, 0.18), transparent 38%),
        radial-gradient(circle at 8% 86%, rgba(72, 195, 184, 0.14), transparent 34%),
        linear-gradient(180deg, rgba(244, 248, 255, 0.9) 0%, rgba(250, 252, 255, 0.96) 100%);

    @media(max-width: 767px){
        padding: 122px 0 84px;
        min-height: 68vh;
    }
`;

export const ErrorTag = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
    font-weight: 800;
    color: #4e84df;
    margin-bottom: 18px;
`;

export const ErrorTitle = styled.h1.attrs({
})`
    margin: 0;
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 64px;
    line-height: .98;
    letter-spacing: -0.03em;
    color: #1e3656;
    max-width: 760px;

    @media(max-width: 991px){
        font-size: 50px;
    }

    @media(max-width: 767px){
        font-size: 36px;
    }
`;

export const ErrorText = styled.p.attrs({
})`
    margin: 18px 0 0;
    color: #4f637b;
    font-size: 21px;
    line-height: 1.58;
    max-width: 780px;

    @media(max-width: 767px){
        font-size: 17px;
    }
`;

export const ErrorActions = styled.div.attrs({
})`
    margin-top: 26px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    > div{
        margin-top: 0;
    }
`;

export const ErrorGhost = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: clamp(120px, 21vw, 280px);
    font-weight: 700;
    line-height: .82;
    letter-spacing: -0.05em;
    color: rgba(30, 54, 86, 0.08);
    user-select: none;
    text-align: right;

    @media(max-width: 991px){
        text-align: left;
    }
`;
 
