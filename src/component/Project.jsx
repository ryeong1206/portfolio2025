import { Title, Inner, Header } from "../styles/Styles"
import { Link } from "react-router-dom"
import ProjectList from "./ProjectList"
import { useData } from "../Context"


function Project() {
    const { ProjectData } = useData();

    return(
        <div>
            <Inner>
                <Header className="mb40">
                    <Link to='/'><img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="home"/></Link>
                </Header>
                <Title className="mb40">이런 프로젝트를 제작했습니다.</Title>
                <ProjectList projects={ProjectData}/>
            </Inner>
        </div>
    )
}

export default Project