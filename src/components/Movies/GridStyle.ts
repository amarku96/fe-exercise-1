
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  padding: 1rem;
`;
export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MovieDetailsTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;
export const MovieDetailsRelease = styled.p`
margin: 0.25rem 0;
    font-size: 0.875rem;
    color: #718096;
`;
