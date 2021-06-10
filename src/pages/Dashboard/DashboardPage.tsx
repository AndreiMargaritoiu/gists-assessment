import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledDashboardIntro, StyledDashboardPageContainer, StyledSearchBar, StyledSearchBarWrapper, StyledSearchButton } from './DashboardPageStyles';

export const DashboardPage = () => {
  const inputPlaceholder: string = 'Type in a name';

  const [name, setName] = useState<string>('');
  const router = useHistory();

  const isSearchDisabled = name.trim().length === 0;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

  const onSubmit = () => {
    router.push(`/${name.trim()}/gists`)
  }

	return (
		<StyledDashboardPageContainer>
      <StyledDashboardIntro>
		  	Interested in seeing someone's gists? 
      </StyledDashboardIntro>
      <StyledSearchBarWrapper>
        <StyledSearchBar placeholder={inputPlaceholder} onChange={onChange}/>
        <StyledSearchButton disabled={isSearchDisabled} onClick={onSubmit}>SEARCH</StyledSearchButton>
      </StyledSearchBarWrapper>
		</StyledDashboardPageContainer>
	)
}
