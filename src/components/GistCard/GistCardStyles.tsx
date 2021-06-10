import styled from 'styled-components';
import { color, font } from './../../utils/theme';

export const StyledGistCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.primary};
  background: ${color.light.secondary};
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    border: 1px solid ${color.other.primary};
  }
`;

export const StyledGistDescription = styled.label`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.15px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const StyledForksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const StyledForkProfileImage = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
`;

export const StyledBottomCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledGistLanguage = styled.div`
  display: inline-block;
  width: fit-content;
  font-size: 16px;
  color: ${color.light.primary};
  background: ${color.other.primary};
  border-radius: 20px;
  padding: 4px 8px;
  cursor: pointer;
`;

export const StyledGistCreationDate = styled.label`
  font-size: 14px;
  color: ${color.light.quaternary};
  cursor: pointer;
`;