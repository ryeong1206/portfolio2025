import styled from "styled-components";


export const Inner = styled.div`
    max-width: 1400px;
    width: 100%;
    min-height: 85vh;
    padding: 2.5rem;
    
    background-color: #FFF;
    overflow-x: hidden;
    margin: 4rem auto;
    position: relative;
    &.home{
        background-color: #55B6FF;
    }

    @media (max-width: 1200px){
        padding: 1.5rem;
        height: 100vh;
        margin: 0 auto;
    }
`;

export const HomeMemo = styled.div`
    width: 100%;
    max-width: 30rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2.5rem;

    @media (max-width: 768px){
        max-width: 24rem;
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
    font-family: 'Pretendard-Bold';
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 5.75rem;
    
    @media (max-width: 768px){
        font-size: 3rem;
        line-height: 3.75rem;
    }
`

//서브타이틀
export const SubTitle = styled.p`
    font-size: 2.25rem;
    line-height: 2.75rem;
    font-weight: 300;
    &.bold{
        font-weight: 700;
    }
        
    @media (max-width: 768px){
        font-size: 1.5rem;
        line-height: 2rem;
    }
`

// 본문
export const Text = styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    &.bold{
        font-weight: 700;
        }
        
    @media (max-width: 768px){
        font-size: 1rem;
    }
`
export const SubText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    &.bold{
        font-weight: 700;
        }
        
    @media (max-width: 768px){
        font-size: 0.875rem;
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
    justify-content: start;
    top: 0;

    &.right{
        right: 0;
    }
    &.left{
        left: 0;
    }
    
    @media (max-width: 768px) {
        top: 1rem;
        left: 1rem;
    }
`
export const MarkItem = styled.p`
    // position: reletive;
    z-index: 2;
    width: 3rem;
    height: 3rem;
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
