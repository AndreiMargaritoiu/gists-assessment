import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GistCard } from '../../components/GistCard/GistCard';
import { Gist } from '../../domain/Gist';
import { Context } from '../../utils/Context';
import { StyledProfileImage, StyledUserDetailsContainer, StyledUserGistsContainer, StyledUserGistsPageContainer, StyledUsername } from './UserGistsPageStyles';

export type GistsRouteProps = {
	username: string,
}

export const UserGistsPage = () => {
	const [gists, setGists] = useState<Gist[]>([]);
	const user = useParams<GistsRouteProps>()
	// const router = useHistory();

	useEffect(() => {
		const fetchGists = async () => {
			const gists: Gist[] = await Context.apiService.getGists(user.username.trim())
			setGists(gists)
		}
		fetchGists();
	},[user])

	const onNavigateToProfile = () => window.open(`${gists[0].owner.html_url}`, "_blank");

	return (
		<StyledUserGistsPageContainer>
			<StyledUserGistsContainer>
				{gists.map(item => <GistCard gist={item} />)}
			</StyledUserGistsContainer>
			{gists[0] && gists[0].owner && (<StyledUserDetailsContainer onClick={onNavigateToProfile}>
				<StyledProfileImage imgSrc={gists[0].owner.avatar_url || ''} role="img" />
				<StyledUsername>{user.username}</StyledUsername>
			</StyledUserDetailsContainer>)}
		</StyledUserGistsPageContainer>
	)
}
