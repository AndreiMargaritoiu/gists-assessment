import styled from 'styled-components';
import { font } from './../../utils/theme';

export const StyledUserGistsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font: ${font.primary};
  margin: 48px;
`;

export const StyledUserGistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const StyledUserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProfileImage = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const StyledUsername = styled.label`
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.15px;
`;