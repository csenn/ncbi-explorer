import React from 'react';
import App from './components/app/App';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

React.render(
	<App/>,
	document.getElementById('app')
);
