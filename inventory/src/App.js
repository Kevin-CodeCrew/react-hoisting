import React, {Component} from 'react';
import './App.css';
import FilterableProductTable from "./FilterableProductTable";

class App extends Component {
    render() {
        return (
            <div>
                <FilterableProductTable/>
            </div>
        );
    }
}

export default App;
