import React, {Component} from 'react';
import './App.css';
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText});
    }

    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
    }


    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable/>
            </div>
        );
    }
}

export default FilterableProductTable;
