import styled from "styled-components";

export const MediaContainer = styled.div`
    color: #fff;
    /* background: #f9f9f9; */
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const MediaWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const MediaRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
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

export const MediaTextBlock = styled.div`
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const MediaContent = styled.div`
    z-index: 3;
    width: 100%;
    max-width: 1100px;
    position: static;
    padding: 8px 0px;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: left;
    list-style-position: inside;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const MediaRow2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: top;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const VideoFrame = styled.div`
    width: 560px;
    height: 315px;

    @media screen and (max-width: 1050px) {
        width: 280px;
        height: 157px;
    }
`;

export const MediaLink = styled.a`
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
