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
        logoImage: `/image/${engTitle}/logo.png`,
        mainImage: `/image/${engTitle}/main.png`,
        detailImage: Array.from({length: detailImageCount}, (_, i) => `/image/${engTitle}/detail${String(i + 1).padStart(2, '0')}.png`),
        detailImageCount,
    }
}


const ProjectData = [
    createProject({
        id: 1,
        complete: true,
        featured: false,
        order: null,
        title: '졸업과제 <식물병원: 닥터보타> 결과보고서',
        engTitle: 'DrBota',
        type: '편집디자인',
        isTeam: false ,
        teamSize: '3인 팀작업',
        period: {
            start: new Date(2020,12),
            end: new Date(2020,12),
        },
        role: {
            desgin: "전체 디자인",
            dev: "",
        },
        tools: {
            desgin: ["Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: [],
        },
        description: '졸업작품으로 기획한 식물병원 <닥터보타>의 결과보고서로 브랜드의 색감과 어울리면서 디자인힌 결과물이 잘 보일 수 있도록 제작하였습니다. 브랜드의 그래픽 모티브를 응용하였으며 필드리서치부터 온라인 전시내용까지 담은 보고서 입니다. 리서치 내용과 인터뷰, 설문조사 등은 보고서 스타일에 맞게 다시 제작하거나 수정을 하여 전체적인 통일감을 주었고, 픽토그램을 이용하여 많은 자료들을 깔끔하게 볼 수 있도록 하였습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 11,
    }),
    createProject({
        id: 2,
        complete: true,
        featured: false,
        order: null,
        title: '벤앤제리스 공식홈페이지',
        engTitle: 'BenAndJerrys',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021,12),
            end: new Date(2021,12),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe Photoshop","Adobe Illustrator"],
            dev: ["JQuery", "SCSS", "HTML" ],
        },
        description: '벤앤제리스는 다양한 재료를 푸짐하게 혼합해 독특한 맛으로 사랑받는 아이스크림 및 소르베 브랜드입니다. 또한 가장 적극적으로 브랜드 행동주의를 강조하고 실천하는 기업으로 평가받고 있습니다. 2019년 정식으로 한국에서 론칭을 하여 공식홈페이지가 생겨났지만, 어색한 번역문장들과 투박한 디자인을 유지하고 있어 이를 리디자인 하였습니다. 벤앤제리스를 상징하는 젖소 캐릭터와 잔디의 이미지를 곳곳에 활용하여 친환경적인 정체성을 강조했으며, 푸른초원이 연상되도록 파란색과 초록색을 주조색으로 사용하고 노란색으로 포인트를 주었습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 3,
    }),
    createProject({
        id: 3,
        complete: true,
        featured: false,
        order: null,
        title: '코알라 홈퍼니처처 공식홈페이지',
        engTitle: 'Koala',
        type: '반응형 웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021,11),
            end: new Date(2021,11),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe Photoshop", "Adobe Illustrator"],
            dev: ["JQuery", "HTML", "CSS" ],
        },
        description: '소비자의 라이프 스타일과 지구를 위한 윤리적인 제품을 생산하는 친환경 가구 브랜드 코알라 홈퍼니처의 반응형 웹사이트 디자인입니다. 기존 사이트의 가독성이 떨어지는 헤더메뉴와 브랜드 컬러가 잘 보이지 않는 점을 보안하여 리디자인 하였습니다. 브랜드 이미지와 어울리도록 둥근 모서리와 미색배경, 원형을 이용한 면분할로 부드러운 분위기를 연출하였습니다. 기존에 사용되었던 청록색과 푸른색을 주색상으로 사용하고 노란색으로 포인트를 주었으며 태블릿과 모바일 기기에서 볼 수 있도록 반응형으로 제작하였습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 3,
    }),
    createProject({
        id: 4,
        complete: true,
        featured: false,
        order: null,
        title: '세븐틴 공식홈페이지',
        engTitle: 'SEVENTEEN',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2021,12),
            end: new Date(2021,12),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 퍼블리싱",
        },
        tools: {
            desgin: ["Adobe Xd", "Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
            dev: ["JQuery", "HTML", "CSS"],
        },
        description: '세븐틴은 2015년 데뷔한 13인조 남성그룹으로 국내뿐만 아니라 해외에서도 입지를 굳히며 K-POP 대표 아이돌로 자리잡았습니다. 홈페이지 리뉴얼을 하지 않아 디자인이 정체되어 있었고, 메인페이지의 활용도가 낮다는 단점이 있어 이를 보안하여 리디자인 하였습니다. 전체적으로 어두운 배경에 밝은 색상의 글씨를 사용하였고, 블러필터배경과 심플한 화면구성으로 모던한 분위기로 연출하였습니다. 블랙 앤 화이트 색상에 9집 미니앨범 Attacca의 컨셉컬러인 붉은 색을 이용해 포인트를 주었습니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: '', description: ''},
            {title: '', description: ''},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 3,
    }),
    createProject({
        id: 5,
        complete: true,
        featured: true,
        order: 3,
        title: '부산 메트로폴리탄 필하모닉 오케스트라 공식 홈페이지',
        engTitle: 'BMPO',
        type: '웹사이트',
        isTeam: true ,
		teamSize: '2인 팀작업업',
        period: {
            start: new Date(2024,11),
            end: new Date(2024,12),
        },
        role: {
            desgin: "전체 디자인",
            dev: "공연 목록/상세 및 예약 기능 개발",
        },
        tools: {
            desgin: ["Adobe Xd","Adobe Photoshop","Adobe Illustrator"],
            dev: ["React, Bootstrap"],
        },
        description: '부산 메트로폴리탄 필하모닉 오케스트라 공식 홈페이지를 리뉴얼 했습니다. 전체 디자인 시안을 담당했습니다. 공연 메뉴, 공연 리스트와 상세페이지 그리고 예약 기능 개발을 담당했습니다.',
        siteLink: "https://ryeong1206.github.io/bmpo/",
        githubLink: "https://github.com/ryeong1206/bmpo/tree/gh-pages",
        functions: [
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 7,
    }),
    createProject({
        id: 6,
        complete: true,
        featured: true,
        order: 2,
        title: '부산 과학체험관 공식 홈페이지',
        engTitle: 'BusanCienceCenter',
        type: '웹사이트',
        isTeam: false ,
		teamSize: '개인 프로젝트',
        period: {
            start: new Date(2024,11),
            end: new Date(2024,12),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 웹 개발",
        },
        tools: {
            desgin: ["Adobe Xd","Adobe Photoshop","Adobe Illustrator"],
            dev: ["React", "SCSS"],
        },
        description: '부산 메트로폴리탄 필하모닉 오케스트라 공식 홈페이지를 리뉴얼 했습니다. 전체 디자인 시안을 담당했습니다. 코딩 파트는 공연 메뉴, 공연 리스트와 상세페이지 그리고 예약 기능을 담당했습니다.',
        siteLink: "https://ryeong1206.github.io/busanScience",
        githubLink: "https://github.com/ryeong1206/busanScience",
        functions: [
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
        ],
        // logoImage,
        // mainImage,
        // detailImage,
        detailImageCount: 7,
    }),
    createProject({
        id: 7,
        complete: true,
        featured: true,
        order: 1,
        title: '2025 포트폴리오 사이트',
        engTitle: 'Portfolio2025',
        type: '반응형 웹사이트',
        isTeam: false ,
        teamSize: '개인 프로젝트',
        period: {
            start: new Date(2025,2),
            end: new Date(2025,2),
        },
        role: {
            desgin: "전체 디자인",
            dev: "전체 웹 개발",
        },
        tools: {
            desgin: ["Adobe Xd"],
            dev: ["React", "SCSS"],
        },
        description: '2025 웹 포트폴리오 설명 입니다.2025 웹 포트폴리오 설명 입니다.2025 웹 포트폴리오 설명 입니다.2025 웹 포트폴리오 설명 입니다.2025 웹 포트폴리오 설명 입니다.2025 웹 포트폴리오 설명 입니다.',
        siteLink: "",
        githubLink: "",
        functions: [
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
            {title: 'Context API를 활용한 상태 관리', description: 'React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다. React Context로 데이터를 세팅해 전역으로 관리할 수 있고, 데이터에 따라 페이지 내용이 자동으로 변경됩니다.'},
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
