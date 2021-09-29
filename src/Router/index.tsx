import { Switch, Route } from 'react-router-dom';

import {Home} from '../pages/home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}