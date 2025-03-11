import styled from "styled-components";




export const ListItem = styled.div`

`

export const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ProjectPreview = styled.div`
    position: relative;
    img{
        width: 100%;
    }
`

export const ProjectInfo = styled.div`
    position: relative;
    li{
        display: flex;
        justify-contexts: start;
        :first-child{
            min-width: 7rem;
        }
    }
    .titleSection{
        display: flex;
        justify-content: space-between;
        align-items: top;
        gap: 1rem;
    }
    
    @media (max-width: 768px) {
        li{
            :first-child{
                min-width: 5.5rem;
            }
        }
    }
`

export const ProjectFunctions  = styled.div`
    ul{
        li{
            border-top: 1px solid #000;
            .index{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background-color: #000;
                color: #fff;
                font-weight: 800;
                text-align: center;
            }
        }
    }
`

export const ProjectGallery = styled.div`
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 49.32%;
            img{
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        ul{
            li{
                width: 100%;
            }
        }
    }
`

export const ProjectNavigation = styled.nav`
    display: flex;
    justify-content: space-between; /* 양쪽 끝으로 배치 */
    align-items: center; 
    width: 100%;
    padding: 20px 0;

    .left {
        text-align: left;
    }
    .right {
        text-align: right;
    }
    
    @media (max-width: 768px) {
        // flex-wrap: wrap;
        // a{
        //     width: 100%;
        // }
    }
`
export const EmptySpace = styled.div`
    width: 150px; /* 버튼 크기만큼 공간 차지 */
    height: 1px; /* 최소한의 높이 */
    visibility: hidden; /* 화면에 안 보이게 */
`