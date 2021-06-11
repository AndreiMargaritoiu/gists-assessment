import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomLoader } from '../../components/CustomLoader/CustomLoader';
import { GistFileContainer } from '../../components/GistFile/GistFileContainer';

import { Gist } from '../../domain/Gist';
import { GistFile } from '../../domain/GistFile';
import { Context } from '../../utils/Context';
import { StyledGistContentPageContainer } from './GistContentPageStyles';

export type GistDetailsRouteProps = {
	gistId: string,
}

export const GistContentPage = () => {
	const [gist, setGist] = useState<Gist | null>(null);
	const [isRequestLoading, setRequestLoading] = useState<boolean>(false);
	const { gistId } = useParams<GistDetailsRouteProps>();

	useEffect(() => {
		const fetchGist = async () => {
			setRequestLoading(true);
			const gist: Gist = await Context.apiService.getGist(gistId.trim())
			setGist(gist)
		}
		fetchGist().then(() => setRequestLoading(false));
	},[gistId])

	const files: GistFile[] = gist ? (gist.files && Object.values(gist.files)) : [];

	return (
		<StyledGistContentPageContainer>
			{!isRequestLoading 
				? files && files.map(item => (<GistFileContainer gistFile={item} />))
				: (<CustomLoader />)
			}
		</StyledGistContentPageContainer>
	)
}
