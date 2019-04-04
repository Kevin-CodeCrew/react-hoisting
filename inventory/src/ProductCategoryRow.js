import React, { Component } from 'react';
import './App.css';

class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}


export default ProductCategoryRow;
