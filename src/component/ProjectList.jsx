import { BtnArrow, BtnSite, MarkWrapper, MarkItem, SubTitle, Text, SubText } from "../styles/Styles"
import { List, ListItem, ProjectInfo, ProjectPreview } from "./ProjectStyles"
import { Link, useNavigate } from "react-router-dom"

import '../App.scss'

// 날짜 표기기
const formatDate = (date) => {
    const year = String(date.getFullYear() - 2000).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return (`${year}.${month}`)
}


// 아이템
export function Item({project}) {
    return (
        // <div className="Item mb40 Col4">
        <ListItem className="Item mb40">
            <Link className="flex" to={`/ProjectDetail/${project.id}`}>
                <ProjectPreview className="Col4 mb24">
                    <img src={project.mainImage} alt="previewImage" />
                </ProjectPreview>
                <ProjectInfo className="ColElse">
                    <div className="titleSection mb16">
                        <SubTitle className="bold">{project.title}</SubTitle>
                            {!project.complete && <MarkItem className="MarkProgress"/>}
                    </div>
                    <ul className="mb24">

                        <li className="mb12">
                            <Text className="">작업유형</Text>
                            <Text>{project.type}</Text>
                        </li>
                        <li className="mb12">
                            <Text className="">작업기간</Text>
                            <Text>{formatDate(project.period.start)} ~ {formatDate(project.period.end)}</Text>
                        </li>
                        <li className="">
                            <Text className="">팀규모</Text>
                            <Text>{project.teamSize}</Text>
                        </li>
                    </ul>
                </ProjectInfo>
            </Link>
        </ListItem>
    )
}


// 리스트트
function ProjectList({projects}) {
    const sortProject = [...projects].sort((a, b) => b.period.end - a.period.end);

    return (
        <List>
            {sortProject.map((project) => (
                <Item project={project} key={project.id}></Item>
            ))}
        </List>
    )
}

export default ProjectList;