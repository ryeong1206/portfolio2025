import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();  // URL이 변경될 때마다 location 업데이트

    useEffect(() => {
        window.scrollTo(0, 0);  // 페이지 이동 시 스크롤을 최상단으로 이동
    }, [location]);  // location이 변경될 때마다 실행

    return null;
};

export default ScrollToTop;
