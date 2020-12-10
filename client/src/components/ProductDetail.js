import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom'


const ProductDetail = () => {
    const history = useHistory()
    const idString = history.location.pathname.split('/')[3]
    const id = parseInt(idString, 10)


    const [product, setProduct] = useState(id);

    useEffect(() => {

        async function getProduct() {
            const response = await fetch(`/api/products/detail/${id}`)
            const data = await response.json();

            setProduct(data);
        }
        getProduct()
    }, [id])


    return (
        <>
            <div className="productDetail-wrapper">
                <div>{product.imgage}</div>
                <h1 className="ProductDetail-name">
                    <div className="ProductDetail-name-name-main">{product.name}</div>

                </h1>
            </div>

            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>

            <div className='ProductDetail-img-text-wrapper'>
                <div className='ProductDetail-name-img-wrapper'>
                    {/* <img alt={product.name} className='ProductDetail-name-img-img' src={`/images/${product.img}`}></img> */}
                </div>
            </div>
        </>
    )
}

export default ProductDetail;















// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { getOneProduct } from '../store/products';


// class ProductDetail extends Component {
//     constructor() {
//         super()
//         this.state = {
//             products: []
//         }
//     }


//     componentDidMount() {
//         this.props.getOneProduct(this.props.match.params.id);
//     }

//     componentDidUpdate(oldProps) {
//         const oldId = oldProps.match.params.id;
//         const newId = this.props.match.params.id;
//         if (oldId === newId) {
//             return;
//         }
//         this.props.getOneProduct(newId);
//     }


//     render() {
//         console.log("STTTAATTT", this.state.products)
//         const product = this.state.products;
//         if (!product) {
//             return null;
//         }
//         return (
//             <div className="product-detail">
//                 <h1>Hello HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</h1>
//                 {/* <h1>{product.name}</h1> */}
//                 <h1>Hello</h1>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         products: state.products,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getOneProduct: (id) => dispatch(getOneProduct(id)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
