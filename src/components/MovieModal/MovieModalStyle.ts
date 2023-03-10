import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:  100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: scroll;
`;

export const ModalContent = styled.div`
  max-width: 800px;
  background-color: #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const ModalCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #999999;
  cursor: pointer;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MovieDetailsImg = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin: auto;
`;

export const MovieDetailsTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const MovieDetailsMeta = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #999999;
  margin: 0;
`;

export const MovieDetailsPlot = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`;
