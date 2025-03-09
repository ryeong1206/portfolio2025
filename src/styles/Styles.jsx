import styled from "styled-components";


export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1720px;
    height: 100%;
    min-height: 90vh;
    padding: 2.5rem;
    background-color: #F0F1E6;
    overflow-x: hidden;
    margin: 0 auto;
    &.home{
        background-color: #55B6FF;
    }

    @media (max-width: 768px){
        padding: 1.5rem;
    }
`;

export const HomeMemo = styled.div`
    width: 30rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.5rem;

    @media (max-width: 768px){
        padding: 1.5rem;
    }
`


export const Header = styled.div`
    width: 100%;
    min-height: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
`


//타이틀
export const Title = styled.p`
    font-size: 4.5rem;
    font-weight: 700;

    @media (max-width: 768px){
        font-size: 2.25rem;
    }
`
//서브타이틀
export const SubTitle = styled.p`
    font-size: 2.5rem;
    font-weight: 300;
    &.bold{
        font-weight: 700;
    }
        
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`
// 본문
export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    &.bold{
        font-weight: 700;
        }
        
    @media (max-width: 768px){
        font-size: 1rem;
    }
`


// 프로젝트 보기 버튼
export const BtnProject = styled.button`
    background-color: #FF95EA;
    &:hover{
    }
`
// 사이트 가기 버튼
export const BtnSite = styled.button`
    cursor: pointer;
    background-color: #FCFF98;
    padding: 0.5rem;
    &:hover{
        background-color: #000;
        color: #fff
    }

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

// 화살표 버튼
export const BtnArrow = styled.button`
    display: flex;
    justify-content: start;
    align-items: center;

    img{
        width: 2.5rem;
    }

    &.absolute{
        position: absolute;
        top: 0;
        right: 0;
    }

    @media (max-width: 768px) {
        img{
            width: 1.5rem;
        }
    }
`


//표시
export const MarkWrapper = styled.p` // 진행중 표시
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    
    @media (max-width: 768px) {
        top: 1rem;
        left: 1rem;
    }
`
export const MarkItem = styled.p`
    // position: reletive;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    background-repeat: no-repeat;
    background-size: contain;

    &.MarkProgress{
        background-image: url(${process.env.PUBLIC_URL}/image/mark-progress.png);
    }
    &.MarkTeam{
        background-image: url(${process.env.PUBLIC_URL}/image/mark-team.png);
    }
    &.MarkPersonal{
        background-image: url(${process.env.PUBLIC_URL}/image/mark-personal.png);
    }
    
    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
    }
`
