import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { GistContentPage } from '../pages/GistContent/GistContentPage';
import { UserGistsPage } from '../pages/UserGists/UserGistsPage';

export enum Routes {
  DASHBOARD = '/',
  USER_GISTS = '/:username/gists',
  GIST_CONTENT = '/gists/:gistId',
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.DASHBOARD} exact={true} component={DashboardPage}/>
        <Route path={Routes.USER_GISTS} exact={true} component={UserGistsPage}/>
        <Route path={Routes.GIST_CONTENT} exact={true} component={GistContentPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  )
}
