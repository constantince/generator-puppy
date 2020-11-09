import React from 'react';
import ReactDom from 'react-dom';

type AppList = {
  greeting: string;
};

const App: React.FC<AppList> = ({ greeting }): JSX.Element => (
  <h4 className="container">
    <a href="./app.html">go about page</a>
    {greeting}
    </h4>
);

ReactDom.render(
    <App greeting="Hello About" />,
    document.getElementById('root'),
);
