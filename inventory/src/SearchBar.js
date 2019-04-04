import React, {Component} from 'react';
import './App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.filterTextChangeHandler = this.filterTextChangeHandler.bind(this);
        this.inStockChangeHandler = this.inStockChangeHandler.bind(this);
    }

    filterTextChangeHandler(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    inStockChangeHandler(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.filterTextChangeHandler}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.inStockChangeHandler}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;
