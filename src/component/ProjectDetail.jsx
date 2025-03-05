import { useState } from 'react';
import { useData } from '../Context';
import { Inner, Header, Title, BtnArrow, BtnSite, MarkWrapper, MarkItem, Text } from "../styles/Styles" ;
import { EmptySpace, ProjectFunctions, ProjectGallery, ProjectInfo, ProjectNavigation, ProjectPreview } from "./ProjectStyles" ;
import { Link, useParams } from 'react-router-dom';
import ImageModal from './ImageModal';


const formatDate = (date) => {
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return (`${year}.${month}`)
}

function ProjectDetail() {
    const {id} = useParams(); //URL에서 id 가져오기
    const { ProjectData } = useData();
    
    const project = ProjectData.find(p => p.id === Number(id));
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function goToSite () {window.open(project.siteLink, '_blank')}
    function goToGithub () {window.open(project.githubLink, '_blank')}

    const currentIndex = ProjectData.findIndex(p => p.id === Number(id))
    const prevProject = ProjectData[currentIndex - 1]
    const nextProject = ProjectData[currentIndex + 1]

    if (!project) {
        return <div>해당 프로젝트를 찾을 수 없습니다.</div>;
    }

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const onPrev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prevIndex => prevIndex - 1);
        }
    };
    
    const onNext = () => {
        if (currentImageIndex < project.detailImage.length - 1) {
            setCurrentImageIndex(prevIndex => prevIndex + 1);
        }
    };

    return(
        <Inner>
            <Header>
                <Link to='/Project'><img src='/image/arrow-left.png' alt="back" /></Link>
            </Header>

            <Title className="bold mb24">{project.title}</Title>

            <ProjectPreview className="mb40">
                <MarkWrapper>
                    {!project.complete && <MarkItem className="MarkProgress mr16"/>}
                    {project.isTeam ? <MarkItem className="MarkTeam"/> : <MarkItem className="MarkPersonal"/>}
                </MarkWrapper>
                <img src={project.mainImage} alt="previewImage" />
            </ProjectPreview>

            <ProjectInfo className="mb80">
                <ul className="mb40">
                    <li className="mb16">
                        <Text className="bold">작업유형</Text>
                        <Text>{project.type}</Text>
                    </li>
                    <li className="mb16">
                        <Text className="bold">작업기간</Text>
                        <Text>{formatDate(project.period.start)} ~ {formatDate(project.period.start)}</Text>
                    </li>
                    <li className="mb16">
                        <Text className="bold">팀규모</Text>
                        <Text>{project.teamSize}</Text>
                    </li>
                </ul>
                <ul className='mb40'>
                    <li className="mb16">
                        <Text className="bold">디자인 역할</Text>
                        <Text>{project.role.desgin}</Text>
                    </li>
                    {project.role.dev &&
                        <li className="mb16">
                            <Text className="bold">개발역할</Text>
                            <Text>{project.role.dev}</Text>
                        </li>
                    }
                    <li className="mb16">
                        <Text className="bold">디자인툴</Text>
                        <Text>{project.tools.desgin}</Text>
                    </li>
                    {project.tools.dev.length > 0 &&
                        <li className="mb16">
                            <Text className="bold">개발언어</Text>
                            <Text>{project.tools.dev}</Text>
                        </li>
                    }
                    <li className="mb16">
                        <Text className="bold">상세설명</Text>
                        <Text>{project.description}</Text>
                    </li>
                </ul>
                {project.siteLink && (
                    <BtnSite className='mr16' onClick={goToSite}><Text className="bold">사이트 가기</Text></BtnSite>
                )}
                {project.githubLink && (
                    <BtnSite onClick={goToGithub}><Text className="bold">깃허브 가기</Text></BtnSite>
                )}
            </ProjectInfo>
            
            {project.functions.some((functionItem) => functionItem.title) &&
                <ProjectFunctions className="mb80">
                    <Title className="mb40">주요 기능</Title>
                    <ul>
                        {project.functions.map((functionItem, index) => (
                            <li className='mb40 pt40' key={index}>
                                {functionItem.title && <p className='index mb24'>{index + 1}</p>}
                                <Text className='bold mb24'>{functionItem.title}</Text>
                                <Text className='mb24'>{functionItem.description}</Text>
                            </li>
                        ))}
                    </ul>
                </ProjectFunctions>
            }

            {project.detailImage &&
                <ProjectGallery>
                    <Title className="mb40">갤러리</Title>
                    <ul>
                        {project.detailImage.map((ImageSrc, index) => (
                            <li key={index} className='mb24'>
                                <img
                                    key={index}
                                    src={ImageSrc}
                                    alt={`Detail ${index + 1}`}
                                    onClick={() => openModal(index)}
                                />
                            </li>
                        ))}
                    </ul>
                </ProjectGallery>
            }

            {modalOpen && (
                <ImageModal
                    modalOpen={modalOpen}
                    closeModal={closeModal}
                    images={project.detailImage}
                    currentImageIndex={currentImageIndex}
                    // setCurrentImageIndex={setCurrentImageIndex}
                    onPrev={onPrev}
                    onNext={onNext}
                ></ImageModal>
            )}

            <ProjectNavigation>
                {prevProject ? (
                    <Link to={`/ProjectDetail/${prevProject.id}`}>
                        <BtnArrow className='left'>
                            <img  className='bold mr16' src='/image/arrow-left.png' alt="back"/>
                            <Text className='bold'>{prevProject.title}</Text>
                        </BtnArrow>
                    </Link>        
                ) : 
                    <EmptySpace/>
                }
                {nextProject ? (
                    <Link to={`/ProjectDetail/${nextProject.id}`}>
                        <BtnArrow className='right'>
                            <Text className='bold mr16'>{nextProject.title}</Text>
                            <img  className='bold' src='/image/arrow-right.png' alt="back"/>
                        </BtnArrow>
                    </Link>        
                ) : 
                    <EmptySpace/>
                }
            </ProjectNavigation>
        </Inner>
    )
}

export default ProjectDetail;