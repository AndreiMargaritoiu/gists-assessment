import { useState } from 'react';
// import { useHistory } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';

import { Gist } from '../../domain/Gist';
import { Routes } from '../../router/Router';
import { Context } from '../../utils/Context';
import { useAsyncEffect } from '../../utils/useAsyncEffect';
import { StyledGistContentPageContainer } from './GistContentPageStyles';


export const GistContentPage = () => {
  const [gists, setGists] = useState<Gist[]>([]);
  const user  = useParams<string>()
  const router = useHistory();

  useAsyncEffect(async () => {
    console.log('hello');
		if (!user) {
			router.push(Routes.DASHBOARD)
		} else {
			try {
				const gists: Gist[] = await Context.apiService.getGists(user.trim())
				setGists(gists)
			} catch (err) {
				alert(err.message)
			}
		}
	}, [user])

	return (
		<StyledGistContentPageContainer>
			gist content
      {gists.map(item => <label>item.name</label>)}
		</StyledGistContentPageContainer>
	)
}
