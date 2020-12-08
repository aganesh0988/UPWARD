import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await this.loadProduct();
    }

    async componentDidUpdate(oldProps) {
        const oldId = Number.parseInt(oldProps.match.params.id);
        const newId = Number.parseInt(this.props.match.params.id);
        if (oldId === newId) {
            return;
        }
        await this.loadProduct();
    }

    async loadProduct() {
        const id = this.props.match.params.id;
        const response = await fetch(`/api/products/detail/${id}`);
        if (response.ok) {
            this.setState({
                product: await response.json(),
            });
        }
    }

    render() {
        const product = this.state.product;
        if (!product) {
            return null;
        }
        return (
            <div className="product-detail">
                <div className={`product-detail-image-background`}
                    style={{ backgroundImage: `url('/images/${product.type}.jpg')` }}>
                    <div className="product-detail-image"
                        style={{ backgroundImage: `url('${product.imageUrl}')` }}>
                    </div>
                    <h1 className="bigger">{product.name}</h1>
                </div>
            </div>
        )
    }
}

export default ProductDetail;
