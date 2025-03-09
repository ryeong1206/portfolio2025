import { BtnArrow, BtnSite, MarkWrapper, MarkItem, SubTitle, Text } from "../../styles/Styles"
import { ProjectInfo, ProjectPreview } from "../ProjectStyles"
import { Link, useNavigate } from "react-router-dom"

import '../App.scss'


const formatDate = (date) => {
    const year = String(date.getFullYear() - 2000).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2);
    return (`${year}년 ${month}월`)
}

export function Item({project}) {
    function goToSite () {window.open(project.siteLink, '_blank')}

    return (
        <div className="Item mb80">
            <Link to={`/ProjectDetail/${project.id}`}>
                <ProjectPreview className="mb24">
                    <MarkWrapper>
                        {!project.complete && <MarkItem className="MarkProgress mr16"/>}
                        {/* {project.isTeam ? <MarkItem className="MarkTeam"/> : <MarkItem className="MarkPersonal"/>} */}
                    </MarkWrapper>
                    <img src={project.mainImage} alt="previewImage" />
                </ProjectPreview>
                
                <ProjectInfo>
                    <div className="titleSection mb24">
                        <SubTitle className="bold">{project.title}</SubTitle>
                        <BtnArrow>
                            <img src={`${process.env.PUBLIC_URL}/image/arrow-right.png`} alt="morebutton" />
                        </BtnArrow>
                    </div>
                    <ul className="mb24">
                        {/* <li className="mb16">
                            <Text className="bold">작업유형</Text>
                            <Text>{project.type}</Text>
                        </li> */}
                        {/* <li className="mb16">
                            <Text className="bold">작업기간</Text>
                            <Text>{formatDate(project.period.start)}</Text>
                        </li> */}
                        {/* <li>
                            <Text className="bold">팀규모</Text>
                            <Text>{project.teamSize}</Text>
                        </li> */}
                    </ul>
                    {project.siteLink && (
                        <BtnSite onClick={goToSite}><Text className="bold">사이트 가기</Text></BtnSite>
                    )}
                </ProjectInfo>
            </Link>
        </div>
    )
}

function ProjectList({projects}) {
    const featuredProject = projects.filter((project) => project.featured).sort((a, b) => a.order - b.order);
    const otherProjects = projects.filter((project) => !project.featured).sort((a, b) => b.period.end - a.period.end)
    const sortProject = [...featuredProject, ...otherProjects];

    return (
        <div>
            {sortProject.map((project) => (
                <Item project={project} key={project.id}></Item>
            ))}
        </div>
    )
}

export default ProjectList;