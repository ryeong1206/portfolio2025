import React from "react";

import './App.scss';

import { Link } from 'react-router-dom';
import { Inner, Title, SubTitle, Text, BtnProject, Header } from "./styles/Styles";

// import ReactPageScroller from "react-page-scroller";

export default function Home() {
    return(
        <div>
            <Inner className="main">
                <Header>
                    <Link to='/'><img src='/image/logo.png' alt="home"/></Link>
                    <BtnProject>
                        <Text className="bold">
                            <Link to='/Project'>프로젝트 보기</Link>
                        </Text>
                    </BtnProject>
                </Header>
                <Title className="Title mb40">프론트엔드에 이해가 깊은<br/>UI/UX 디자이너 진세령 입니다.</Title>
                <SubTitle>프론트엔드 지식과 어쩌구 저쩌구 경험을 바탕으로 직관적이고 사용성이 뛰어난 웹서비스를 개발하고 싶습니다.</SubTitle>
            </Inner>
        </div>
    );
}