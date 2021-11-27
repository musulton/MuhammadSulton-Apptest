import * as React from 'react';
import {Provider} from 'react-redux';

import store from './Redux/configureStore';
import MainNavigation from './Navigation/MainNavigation';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;
