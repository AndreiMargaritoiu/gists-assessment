import styled from 'styled-components';
import { color } from './../../utils/theme';

export const StyledCustomLoader = styled.div`
  margin-top: 40vh;
  align-self: center;
  border: 16px solid ${color.light.secondary}; 
  border-top: 16px solid ${color.other.primary}; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
