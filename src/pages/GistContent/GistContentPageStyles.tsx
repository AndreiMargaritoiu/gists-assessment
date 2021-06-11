import styled from 'styled-components';
import { color, font } from './../../utils/theme';

export const StyledGistContentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.primary};
  margin: 48px;
`;

export const StyledGistDescription = styled.label`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const StyledGistUserContainer = styled.div`
  font-size: 16px;
  margin-bottom: 32px;
  cursor: default;

  .username {
    margin-left: 2px;

    :hover {
      color: ${color.other.primary};
      cursor: pointer;
    }
  }
`;
