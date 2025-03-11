import React from "react";

import './App.scss';

import { Link } from 'react-router-dom';
import { Inner, Title, SubTitle, Text, BtnProject, Header, HomeMemo } from "./styles/Styles";


export default function Home() {

    return(
        <div>
            <Inner className="home">
                <Header>
                    <Link to='/'><img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="home"/></Link>
                    <BtnProject>
                        <Text className="bold">
                            <Link to='/Project'>프로젝트 보기</Link>
                        </Text>
                    </BtnProject>
                </Header>
                <Title className="Title mb40">프론트엔드에 이해가 깊은 <br className="responsive-br"/>UI/UX 디자이너 진세령 입니다</Title>
                {/* <SubTitle>프론트엔드 지식과 UI/UX 경험을 바탕으로 사용성이 뛰어난 웹서비스를 개발하고 싶습니다</SubTitle> */}
                <HomeMemo className="homeMemo"><img src={`${process.env.PUBLIC_URL}/image/homeMemo.png`} alt="homeMemo"/></HomeMemo>
            </Inner>
        </div>
    );
}