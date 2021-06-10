import { StyledGistContentPageContainer } from './GistContentPageStyles';


export type GistDetailedViewRouteProps = {
	gistId: string,
}

export const GistContentPage = () => {
  
	return (
		<StyledGistContentPageContainer>
			gist content
		</StyledGistContentPageContainer>
	)
}
