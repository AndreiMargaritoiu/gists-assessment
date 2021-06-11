import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Gist } from '../../domain/Gist';
import { 
  StyledBottomCardContainer, 
  StyledForkProfileImage, 
  StyledForksContainer, 
  StyledGistCardContainer, 
  StyledGistCreationDate, 
  StyledGistDescription, 
  StyledGistLanguage 
} from './GistCardStyles';
import { Fork } from '../../domain/Fork';
import { Context } from '../../utils/Context';
import { useHistory } from 'react-router-dom';

export type GistCardProps = {
	gist: Gist,
}

export const GistCard = (props: GistCardProps) => {
  const { gist } = props;
  const [forks, setForks] = useState<Fork[]>([]);
  const router = useHistory();

  const languages: string[] = Object.values(gist.files).map(item => item.language);

  // would exceed the API rate limit

  // useEffect(() => {
	// 	const fetchForks = async () => {
	// 		const forks: Fork[] = await Context.apiService.getForks(gist.forks_url)
	// 		setForks(forks)
	// 	}
	// 	fetchForks();
	// },[gist])

  
	const onNavigateToGist = () => router.push(`/gists/${gist.id}`);

	return (
		<StyledGistCardContainer onClick={onNavigateToGist}>
      <StyledGistDescription className={gist.description ? '' : 'no-description'}>
			  {gist.description || 'No description provided'}
      </StyledGistDescription>
      {forks && forks.length > 0 && <StyledForksContainer>forked by {forks.length} {forks.length === 1 ? 'user' : 'users'}
        {forks.slice(0, 3).map(item => (<StyledForkProfileImage imgSrc={item.owner.avatar_url || ''} role="img"/>))}
        {forks.length > 3 ? '+ more' : ''}
      </StyledForksContainer>}
      <StyledBottomCardContainer>
        <div>
          {languages.length > 0 && languages.map(item => <StyledGistLanguage>{item}</StyledGistLanguage>)}
        </div>
        <StyledGistCreationDate>
          {moment(gist.created_at).format('DD-MM-YYYY HH:MM:SS')}
        </StyledGistCreationDate>
      </StyledBottomCardContainer>
		</StyledGistCardContainer>
	)
}