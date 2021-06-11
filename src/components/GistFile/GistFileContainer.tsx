import React from 'react';

import { GistFile } from '../../domain/GistFile';
import { 
  StyledGistFileContainer, 
  StyledGistFileCotent, 
  StyledGistFileDetails, 
  StyledGistFileLanguage, 
  StyledGistFileName 
} from './GistFileStyles';

export type GistFileContainerProps = {
	gistFile: GistFile,
}

export const GistFileContainer = (props: GistFileContainerProps) => {
  const { gistFile } = props;

	return (
		<StyledGistFileContainer>
      <StyledGistFileDetails>
        <StyledGistFileName>{gistFile.filename}</StyledGistFileName>
        <StyledGistFileLanguage>{gistFile.language}</StyledGistFileLanguage>
      </StyledGistFileDetails>
      <StyledGistFileCotent>{gistFile.content}</StyledGistFileCotent>
		</StyledGistFileContainer>
	)
}