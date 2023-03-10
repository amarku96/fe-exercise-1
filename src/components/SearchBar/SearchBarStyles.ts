import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 500px;
`;

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex-grow: 1;
  margin-right: 0.5rem;
`;

export const SearchBarButton = styled.button`
  background-color: #008080;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005757;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 20px;
  text-align: center;
  color:#005757
`;
