import { useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-height: 85vh;
  // overflow: hidden;
  // border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  // height: 100%;
  max-height: 85vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Image = styled.img`
  width: 100%;  // 가로 100%로 맞추기
  // height: auto; // 세로는 자동으로 비율 맞추기
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;

  ${({ direction }) => direction === "left" && "left: 10px;"}
  ${({ direction }) => direction === "right" && "right: 10px;"}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ImageModal = ({ images, currentImageIndex, closeModal, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // 모달이 열리면 body 스크롤을 막음
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // 모달이 닫히면 스크롤을 다시 원래대로 돌림
      document.body.style.overflow = "auto";
    };
  }, [closeModal, onPrev, onNext]);

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>✕</CloseButton>

        {/* 왼쪽 버튼 (첫 번째 이미지일 경우 비활성화) */}
        <ArrowButton direction="left" onClick={onPrev} disabled={currentImageIndex === 0}>
          ◀
        </ArrowButton>

        {/* 이미지 표시 */}
        <ImageWrapper>
          <Image src={images[currentImageIndex]} alt="확대된 이미지" />
        </ImageWrapper>

        {/* 오른쪽 버튼 (마지막 이미지일 경우 비활성화) */}
        <ArrowButton direction="right" onClick={onNext} disabled={currentImageIndex === images.length - 1}>
          ▶
        </ArrowButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal;
