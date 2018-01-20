import React from 'react';
import reactDOM from 'react-dom';
// import { BrowserRouter} from 'react-router-dom';
// import App from './components/App';

import Search from './containers/Search';

const browserRouter = <Search/>;

reactDOM.render({ browserRouter }, document.getElementById('root'));
