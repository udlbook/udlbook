import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #57c6d1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    position: static;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    max-width: 1100px;
    position: static;
    padding: 8px 24px;
    margin: 80px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: top;
    grid-template-areas: "col1 col2";

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "col2"
            "col1";
    }
`;

export const HeroNewsItem = styled.div`
    margin-left: 4px;
    color: #000000;
    font-size: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: start;
`;

export const HeroNewsItemDate = styled.div`
    width: 20%;
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const HeroNewsItemContent = styled.div`
    width: 80%;
    color: #000000;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const HeroColumn1 = styled.div`
    margin-bottom: 15px;
    margin-left: 12px;
    margin-top: 60px;
    padding: 10px 15px;
    grid-area: col1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        padding: 0;
    }
`;

export const HeroColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`;

export const HeroImgWrap = styled.div`
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

export const HeroDownloadsImg = styled.img`
    margin-top: 5px;
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    margin-bottom: 10px;
`;

export const HeroLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 0rem 0rem 0rem;
    cursor: pointer;
    position: relative;

    &:before {
        position: absolute;
        margin: 0 auto;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
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

export const UDLLink = styled.a`
    text-decoration: none;
    color: #000;
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
        background-color: #000;
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

export const HeroNewsTitle = styled.div`
    margin-left: 0px;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 36px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroCitationTitle = styled.div`
    margin-left: 0px;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 36px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroNewsBlock = styled.div``;

export const HeroCitationBlock = styled.div`
    font-size: 14px;
    margin-bottom: 0px;
    margin-top: 0px;
`;

export const HeroFollowBlock = styled.div`
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const HeroNewsMoreButton = styled.button`
    background: #fff;
    color: #000;
    font-size: 16px;
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center;

    &:hover {
        background: #000;
        color: #fff;
    }
`;
