import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOneProduct } from '../store/products';

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        this.props.getOneProduct(this.props.match.params.id);
    }

    componentDidUpdate(oldProps) {
        const oldId = oldProps.match.params.id;
        const newId = this.props.match.params.id;
        if (oldId === newId) {
            return;
        }
        this.props.getOneProduct(newId);
    }


    render() {
        // const product = this.state.product;
        // if (!product) {
        //     return null;
        // }
        return (
            <div className="product-detail">
                <h1>Hello HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOneProduct: (id) => dispatch(getOneProduct(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
