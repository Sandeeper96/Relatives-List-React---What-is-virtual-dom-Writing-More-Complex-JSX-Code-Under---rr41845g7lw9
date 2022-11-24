import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                <ol key="relativeList">
                    <li key="relativeListItem1">Shraddha</li>
                    <li key="relativeListItem2">moni</li>
                </ol>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
