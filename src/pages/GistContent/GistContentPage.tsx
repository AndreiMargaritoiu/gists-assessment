import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomLoader } from '../../components/CustomLoader/CustomLoader';

import { Gist } from '../../domain/Gist';
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
  
	return (
		<StyledGistContentPageContainer>
			{!isRequestLoading 
				? (<>
					gist content
					{gist && <label>{gist.description}</label>} </>)
				: (<CustomLoader />)
			}
		</StyledGistContentPageContainer>
	)
}
