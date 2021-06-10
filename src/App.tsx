import { Fragment } from 'react';

import { Router } from './router/Router';
import { Context } from './utils/Context';
import { HttpApiService } from './services/HttpApiService';

Context.initialize({
  apiService: new HttpApiService(),
});

function App() {
  return (
      <Fragment>
        <Router/>
      </Fragment>
  );
}

export default App;
