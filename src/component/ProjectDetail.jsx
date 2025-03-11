import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../Context';
import { Inner, Header, Title, BtnArrow, BtnSite, MarkWrapper, MarkItem, Text } from "../styles/Styles" ;
import { EmptySpace, ProjectFunctions, ProjectGallery, ProjectInfo, ProjectNavigation, ProjectPreview } from "./ProjectStyles" ;
import ImageModal from './ImageModal';


const formatDate = (date) => {
    const year = String(date.getFullYear() - 2000).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2);
    return (`${year}년 ${month}월`)
}

function ProjectDetail() {
    //URL에서 id 가져오기
    const {id} = useParams();
    
    // 프로젝트 데이터 가져오기
    const { ProjectData } = useData();

    // 리스트 완료일순 정렬
    const sortedProjects = [...ProjectData].sort((a, b) => b.period.end - a.period.end);

    // 현재 프로젝트 가져오기
    const project = sortedProjects.find(p => p.id === Number(id));

    // 모달창 상태
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 프로젝트 없을 시
    if (!project) {
        return <div>해당 프로젝트를 찾을 수 없습니다.</div>;
    }

    // 모달 열기/닫기 사진 이전/다음
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
    
    // 프로젝트 이전/다음 버튼
    const currentIndex = sortedProjects.findIndex((p) => p.id === Number(id));
    const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;



    return(
        <Inner>
            <Header>
                <Link to='/Project'><img src={`${process.env.PUBLIC_URL}/image/arrow-left.png`} alt="back" /></Link>
            </Header>

            <Title className="bold mb24">{project.title}</Title>

            <ProjectPreview className="mb40">
                <img src={project.mainImage} alt="previewImage" />
            </ProjectPreview>

            <ProjectInfo className="mb80">
                <MarkWrapper className="mb40">
                    {!project.complete && <MarkItem className="MarkProgress mr16"/>}
                    {project.isTeam ? <MarkItem className="MarkTeam"/> : <MarkItem className="MarkPersonal"/>}
                </MarkWrapper>
                <ul className="">
                    <li className="mb16">
                        <Text className="bold">작업유형</Text>
                        <Text>{project.type}</Text>
                    </li>
                    <li className="mb16">
                        <Text className="bold">작업기간</Text>
                        <Text>{formatDate(project.period.start)}</Text>
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
                        <Text>{project.tools.desgin.map((it, idx) => (
                                <span key={idx}>{it}{idx !== project.tools.desgin.length - 1 && " / "}</span>
                            ))}</Text>
                    </li>
                    {project.tools.dev.length > 0 &&
                        <li className="mb16">
                            <Text className="bold">개발언어</Text>
                            <Text>{project.tools.dev.map((it, idx) => (
                                <span key={idx}>{it}{idx !== project.tools.dev.length - 1 && " / "}</span>
                            ))}</Text>
                        </li>
                    }
                    <li className="mb16">
                        <Text className="bold">상세설명</Text>
                        <Text>{project.description}</Text>
                    </li>
                </ul>
                {project.siteLink && (
                    <BtnSite className='mr16' onClick={() => {window.open(project.siteLink, '_blank')}}><Text className="bold">사이트 가기</Text></BtnSite>
                )}
                {project.githubLink && (
                    <BtnSite onClick={()=>{window.open(project.githubLink, '_blank')}}><Text className="bold">깃허브 가기</Text></BtnSite>
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
                    <Title className='mb40'>갤러리</Title>
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
                            <img  className='bold mr16' src={`${process.env.PUBLIC_URL}/image/arrow-left.png`} alt="back"/>
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
                            <img  className='bold' src={`${process.env.PUBLIC_URL}/image/arrow-right.png`} alt="back"/>
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