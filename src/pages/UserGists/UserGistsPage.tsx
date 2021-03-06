import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { CustomLoader } from '../../components/CustomLoader/CustomLoader';
import { GistCard } from '../../components/GistCard/GistCard';
import { Gist } from '../../domain/Gist';
import { Context } from '../../utils/Context';
import { onNavigateToProfile } from '../../utils/helperFunctions';
import { 
	StyledGoBackLabel, 
	StyledProfileImage, 
	StyledSearchResult, 
	StyledUserDetailsContainer, 
	StyledUserGistsContainer, 
	StyledUserGistsListContainer, 
	StyledUserGistsPageContainer, 
	StyledUsername 
} from './UserGistsPageStyles';

export type UserGistsRouteProps = {
	username: string,
}

export const UserGistsPage = () => {
	const [gists, setGists] = useState<Gist[]>([]);
	const [isRequestLoading, setRequestLoading] = useState<boolean>(false);
	const user = useParams<UserGistsRouteProps>()
	const router = useHistory();

	useEffect(() => {
		const fetchGists = async () => {
			setRequestLoading(true);
			const gists: Gist[] = await Context.apiService.getGists(user.username.trim())
			setGists(gists)
		}
		fetchGists().finally(() => setRequestLoading(false));
	},[user])

	const onNavigateBack = () => router.push('/');

	return (
		<StyledUserGistsPageContainer>
			{!isRequestLoading 
				? (<>
					<StyledGoBackLabel onClick={onNavigateBack}>
						Curious to search another name? GO BACK
					</StyledGoBackLabel>
					{gists && gists.length > 0 ? (
						<StyledUserGistsListContainer>
							<StyledUserGistsContainer>
								{gists.map(item => <GistCard gist={item} />)}
							</StyledUserGistsContainer>
							{gists[0] && gists[0].owner && (
								<StyledUserDetailsContainer>
								<StyledProfileImage 
									onClick={() => onNavigateToProfile(gists[0].owner.html_url)} 
									imgSrc={gists[0].owner.avatar_url || ''} 
									role="img" 
								/>
								<StyledUsername onClick={() => onNavigateToProfile(gists[0].owner.html_url)}>
									{user.username}
								</StyledUsername>
								</StyledUserDetailsContainer>
							)}
					</StyledUserGistsListContainer>) 
				: (<StyledSearchResult>No results found</StyledSearchResult>)}
				</>) 
				: (<CustomLoader />)
			}
		</StyledUserGistsPageContainer>
	)
}
