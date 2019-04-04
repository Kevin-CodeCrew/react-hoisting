import React, {Component} from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import ProductTable from './ProductTable';

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
        console.log("Filtered Text Event: " + this.state.filterText);
    }

    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
        console.log("In stock Event: " + this.state.inStockOnly);
    }


    render() {
        return (
            <div>
                <SearchBar
                    // filterText={this.state.filterText}
                    // inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange = {this.handleInStockChange}

                />

                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}

                />
            </div>
        );
    }
}

export default FilterableProductTable;
