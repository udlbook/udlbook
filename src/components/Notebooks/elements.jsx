import styled from "styled-components";

export const NotebookContainer = styled.div`
    color: #fff;
    /* background: #f9f9f9; */
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const NotebookWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 1250px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const NotebookRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.p`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 1050px) {
        font-size: 12px;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const Column2 = styled.p`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 1050px) {
        font-size: 12px;
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const TopLine = styled.p`
    color: #57c6d1;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin-top: 0;
    margin-right: 0;
    margin-left: 10px;
    padding-right: 0;
`;

export const NBLink = styled.a`
    text-decoration: none;
    color: #57c6d1;
    font-weight: 300;
    margin: 0 2px;
    position: relative;

    &:before {
        position: absolute;
        margin: 0 auto;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #57c6d1;
        content: "";
        opacity: 0.3;
        -webkit-transform: scaleX(1);
        transition-property:
            opacity,
            -webkit-transform;
        transition-duration: 0.3s;
    }

    &:hover:before {
        opacity: 1;
        -webkit-transform: scaleX(1.05);
    }
`;
