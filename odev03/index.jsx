import React from "react";
import ReactDOM from "react-dom";
import Kod from "./kod.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Kod/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
