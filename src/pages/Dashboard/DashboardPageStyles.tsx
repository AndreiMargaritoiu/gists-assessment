import styled from 'styled-components';
import { color, font } from './../../utils/theme';

export const StyledDashboardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.primary};
  margin: 48px;
`;

export const StyledDashboardIntro = styled.label`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const StyledSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledSearchBar = styled.input`
  width: 500px;
  margin-right: 16px;
  font-size: 16px;
  padding: 16px;
`;

export const StyledSearchButton = styled.button`
  width: 100px;
  font-size: 16px;
  padding: 16px;
  color: ${color.light.primary};
  background: ${color.accent.primary};

  :disabled {
    background: ${color.light.quaternary};
  }
`;