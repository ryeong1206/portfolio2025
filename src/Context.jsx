import React, { createContext, useContext } from "react";

function createProject({
    id, // id: id의 구조로 되어 있음
    complete,
    featured, //boolean 값 true=먼저 보여줄 거
    order, // featured 프로젝트 보여주고 싶은 순위
    title, //제목
    engTitle,
    type, //유형
    period, //작업기간
    isTeam,
    teamSize,
    role,
    tools,
    description, //상세설명
    siteLink,
    githubLink,
    functions = [],
    logoImage,
    mainImage,
    detailImage,
    detailImageCount,
}) {
    return{
        id,
        complete,
        featured,
        order,
        title,
        engTitle,
        type,
        period,
        isTeam,
        teamSize,
        role,
        tools,
        description,
        siteLink,
        githubLink,
        functions,
        logoImage: `${process.env.PUBLIC_URL}/image/${engTitle}/logo.png`,
        mainImage: `${process.env.PUBLIC_URL}/image/${engTitle}/main.png`,
        detailImage: Array.from({length: detailImageCount}, (_, i) => `${process.env.PUBLIC_URL}/image/${engTitle}/detail${String(i + 1).padStart(2, '0')}.png`),
        detailImageCount,
    }
}


const ProjectData = [
    createProject({
        id: 1,
        complete: true,
        featured: false,
        order: null,
        title: '자유 주제 잡지편집 <LGBT>',
        engTitle: 'LGBT',
        type: '편집디자인',
        isTeam: false ,
        teamSize: '개인 작업',
        period: {
            start: new Date(2019, 11-1, 16),
            end: new Date(2019, 11-1, 27),
        },
        role: {
            desgin: "전체 디자인",
            dev: "",
        },
        tools: {
            desgin: ["Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: [],
        },
        description: '성소수자를 주제로 만든 컨셉잡지로 성소수자를 지칭하는 다양한 의미나 관련된 축제, 영화에 대한 내용을 실어 제작하였습니다. 이들을 상징하는 무지개를 디자인 컨셉으로 잡았고 사진의 일부분을 흑백처리하여 색상이 강조되 수 있도록 하였습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        detailImageCount: 7,
    }),
    createProject({
        id: 2,
        complete: true,
        featured: false,
        order: null,
        title: '졸업과제 <식물병원: 닥터보타> 결과보고서',
        engTitle: 'DrBota',
        type: '편집디자인',
        isTeam: false ,
        teamSize: '3인 팀작업',
        period: {
            start: new Date(2020, 12-1, 1),
            end: new Date(2020, 12-1, 16),
        },
        role: {
            desgin: "전체 디자인",
            dev: "",
        },
        tools: {
            desgin: ["Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: [],
        },
        description: '졸업작품으로 기획한 식물병원 <닥터보타>의 결과보고서 입니다. 브랜드의 그래픽 모티브를 응용하였으며 필드리서치부터 온라인 전시내용까지 담은 보고서 입니다. 리서치 내용과 인터뷰, 설문조사 등은 보고서 스타일에 맞게 다시 제작하거나 수정을 하여 전체적인 통일감을 주었고, 픽토그램을 이용하여 많은 자료들을 깔끔하게 볼 수 있도록 하였습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        detailImageCount: 11,
    }),
    createProject({
        id: 3,
        complete: true,
        featured: false,
        order: null,
        title: '벤앤제리스 공식홈페이지',
        engTitle: 'BenAndJerrys',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021, 10-1, 2),
            end: new Date(2021, 10-1, 22),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe Photoshop","Adobe Illustrator"],
            dev: ["JQuery", "SCSS", "HTML" ],
        },
        description: '벤앤제리스 공식홈페이지 리뉴얼 입니다. 2019년 정식으로 한국에서 론칭을 하여 공식홈페이지가 생겨났지만, 어색한 번역문장들과 투박한 디자인을 유지하고 있어 이를 리디자인 하였습니다. 벤앤제리스의 친환경적인 정체성을 강조했습니다.',
        siteLink: "https://ryeong1206.github.io/benandjerrys/",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        detailImageCount: 1,
    }),
    createProject({
        id: 4,
        complete: true,
        featured: false,
        order: null,
        title: '코알라 홈퍼니처 공식홈페이지',
        engTitle: 'Koala',
        type: '반응형 웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021, 10-1, 9),
            end: new Date(2021, 11-1, 2),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe Photoshop", "Adobe Illustrator"],
            dev: ["JQuery", "HTML", "CSS" ],
        },
        description: '윤리적인 제품을 생산하는 친환경 가구 브랜드 코알라의 홈페이지를 태블릿과 모바일 기기에서 볼 수 있도록 반응형으로 제작하였습니다. 기존에 사용되었던 청록색과 푸른색을 주색상으로 사용하였고 노후되어 보기 불편했던 UI를 개선하였습니다.',
        siteLink: "https://ryeong1206.github.io/Koala/",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        detailImageCount: 2,
    }),
    createProject({
        id: 5,
        complete: true,
        featured: false,
        order: null,
        title: '세븐틴 공식홈페이지',
        engTitle: 'SEVENTEEN',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021, 11-1, 1),
            end: new Date(2021, 11-1, 28),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: ["JQuery", "HTML", "CSS"],
        },
        description: '좋아하는 가수인 세븐틴의 공식 홈페이지를 리뉴얼 했습니다. 기존 홈페이지는 디자인이 정체되어 있었고, 메인페이지의 활용도가 낮다는 단점이 있어  심플한 화면구성과 앨범의 컨셉컬러인 붉은 색을 이용해 포인트를 주었습니다.',
        siteLink: "https://ryeong1206.github.io/seventeen/#firstPage",
        githubLink: "",
        functions: [
            {title: '', description: ''},
            {title: '', description: ''},
        ],
        detailImageCount: 1,
    }),
    createProject({
        id: 6,
        complete: true,
        featured: true,
        order: 4,
        title: '2021 웹 포트폴리오',
        engTitle: 'Portfolio2021',
        type: '반응형 웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021, 11-1, 9),
            end: new Date(2021, 12-1, 29),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: ["JQuery", "HTML", "CSS"],
        },
        description: '2021년 웹 포트폴리오 입니다. 다양한 화면 크기를 고려해 반응형으로 설계하였으며 프로젝트에 대한 상세한 설명을 담았습니다.',
        siteLink: "https://ryeong1206.github.io/portfolio/",
        githubLink: "",
        functions: [
            {title: '', description: ''},
            {title: '', description: ''},
        ],
        detailImageCount: 6,
    }),
    createProject({
        id: 7,
        complete: false,
        featured: true,
        order: 3,
        title: '부산 메트로폴리탄 필하모닉 오케스트라 공식 홈페이지',
        engTitle: 'BMPO',
        type: '웹사이트',
        isTeam: true ,
		teamSize: '2인 팀작업',
        period: {
            start: new Date(2024,11-1, 28),
            end: new Date(2024,1-1, 8),
        },
        role: {
            desgin: "전체 디자인",
            dev: "공연 목록/상세 및 예약 기능 개발",
        },
        tools: {
            desgin: ["Adobe Xd","Adobe Photoshop","Adobe Illustrator"],
            dev: ["React", "module CSS", "Context API", "React Router",  "Styled-component"],
        },
        description: '부산 메트로폴리탄 필하모닉 오케스트라 공식 홈페이지를 리뉴얼 했습니다. 공연 리스트와 상세페이지를 담당했으며 필터와 검색어 검색 기능을 추가했습니다. 공연 예약/ 공연 찜하기 기능을 개발했습니다.',
        siteLink: "https://ryeong1206.github.io/bmpo/",
        githubLink: "https://github.com/ryeong1206/bmpo/tree/gh-pages",
        functions: [
            {title: 'React Calendar 공연 예약 기능', description: 'React Calendar를 이용해 공연 예약 기능을 개발했습니다. 예매 기간만 날짜를 선택할 수 있으며, 예약 모달에서 좌석과 가격을 선택해 예약합니다.'},
            {title: 'use State 공연 찜 기능', description: 'use State를 사용해 공연 찜하기 기능을 추가했습니다.'},
            {title: 'Context API를 활용한 상태 관리', description: 'context 파일을 생성해 createContext와 useContext를 사용하여 전역적으로 데이터를 관리할 수 있습니다.'},
            {title: 'map 함수를 활용한 프로젝트 리스트/상세 페이지 자동 생성', description: 'map 함수를 사용해 데이터를 순회하며 프로젝트 리스트를 동적으로 생성하고, 클릭 시 상세 페이지에 연결되도록 구현했습니다.'},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 7,
    }),
    createProject({
        id: 8,
        complete: false,
        featured: true,
        order: 2,
        title: '부산 과학체험관 공식 홈페이지',
        engTitle: 'BusanCienceCenter',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2024,11-1, 28),
            end: new Date(2025,1-1, 22),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 웹 개발",
        },
        tools: {
            desgin: ["Adobe Xd","Adobe Photoshop","Adobe Illustrator"],
            dev: ["React", "module SCSS", "Context API", "React Router", "React Bootstrap"],
        },
        description: '부산 과학체험관 공식 홈페이지를 일부 리디자인 했습니다. 충돌 방지를 위해 module SCSS를 사용하여 컴포넌트 별로 스타일을 독립적으로 관리합니다.  ',
        siteLink: "https://ryeong1206.github.io/busanScience",
        githubLink: "https://github.com/ryeong1206/busanScience",
        functions: [
            {title: 'Module SCSS 스타일 적용', description: '스타일이 충돌하는 것을 방지하기 위해 SCSS 모듈을 사용했습니다. 각 컴포넌트에 맞는 스타일을 모듈화해 적용했습니다.'},
            {title: 'Context API를 활용한 데이터터 관리', description: 'context 파일을 생성해 createContext와 useContext를 사용하여 전역적으로 데이터를 관리할 수 있습니다.'},
            {title: 'bootstrap 라이브러리 캐러솔', description: '메인 슬라이드를 bootstrap 라이브러리 캐러솔을 적용했습니다.'},
        ],
        detailImageCount: 7,
    }),
    // 2025 포트폴리오
    createProject({
        id: 9,
        complete: true,
        featured: true,
        order: 1,
        title: '2025 웹 포트폴리오',
        engTitle: 'Portfolio2025',
        type: '반응형 웹사이트',
        isTeam: false ,
        teamSize: '개인 프로젝트',
        period: {
            start: new Date(2025, 2-1, 5),
            end: new Date(2025, 3-1, 9),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 웹 개발",
        },
        tools: {
            desgin: ["Adobe Xd"],
            dev: ["React", "SCSS", "Context API", "React Router",  "Styled-component"],
        },
        description: '2025 반응형 웹 포트폴리오 입니다. 다양한 화면 크기에 대응할 수 있도록 반응형으로 설계하여, 어떤 디바이스에서도 안정적인 UI를 제공합니다. React 기반으로 개발했으며 데이터를 동적으로 관리하여 자동으로 렌더링 되도록 구현하였습니다.',
        siteLink: "",
        githubLink: "https://github.com/ryeong1206/portfolio2025",
        functions: [
            {title: 'Context API를 활용한 상태 관리', description: 'context 파일을 생성해 createContext와 useContext를 사용하여 전역적으로 데이터를 관리합니다.'},
            {title: 'map 함수로 목록/상세 페이지 자동 생성', description: 'map 함수를 사용해 데이터를 순회하며 프로젝트 리스트를 자동으로 생성하고, 클릭 시 상세 페이지에 연결되도록 구현했습니다.'},
            {title: '연산자를 활용한 데이터 출력', description: '연산자로 데이터의 존재 여부를 판별해, 해당 정보가 있을 때만 화면에 표시되도록 구현했습니다. 불필요한 빈 필드가 보이지 않도록 했습니다.'},
            {title: 'styled-component를 사용한 스타일링', description: 'styled-component를 사용해 프로젝트 리스트, 상세정보 등 UI 요소를 디자인하고, props를 활용해 동적인 스타일을 적용했습니다. 또한 공통 스타일 컴포넌트를 추가해 반응형 UI도 한 곳에서 관리할 수 있도록 했습니다.'},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 3,
    }),
]


const MyContext = createContext();

export const Provider = ({children}) => {
    const contextValue = {
        ProjectData: ProjectData,
    }
    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}

export const useData = () => {
    return useContext(MyContext)
};
