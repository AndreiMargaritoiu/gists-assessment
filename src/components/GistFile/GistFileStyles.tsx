import styled from 'styled-components';
import { color, font } from './../../utils/theme';

export const StyledGistFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.primary};
  border: 1px solid ${color.dark.primary};
  border-radius: 10px;
  padding: 16px;
  width: 900px;
  align-self: center;
`;

export const StyledGistFileCotent = styled.div`
  background: ${color.light.secondary};  
  cursor: text;
  padding: 16px;
  white-space: pre-wrap;
`;

export const StyledGistFileDetails = styled.div`
  display: flex;
  flex-details: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledGistFileName = styled.label`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.15px;
  margin-bottom: 4px;
`;

export const StyledGistFileLanguage = styled.div`
  display: inline-block;
  width: fit-content;
  font-size: 16px;
  color: ${color.light.primary};
  background: ${color.other.primary};
  border-radius: 20px;
  padding: 4px 8px;
`;
