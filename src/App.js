import React from 'react';
import './index.css';
import Views from './Views';

// React best practices indicate that the final level of rendering before the index.js file shoul dbe named 'App'.
class App extends React.Component {
    render() {
        return <Views />;
    }
}

export default App;