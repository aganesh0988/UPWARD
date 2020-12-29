import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./ProductDetail.css"


const ProductDetail = () => {
    const history = useHistory()
    // const idString = history.location.pathname.split('/')[3]
    const idString = history.location.pathname.split('/').pop()
    console.log("IIIDDDDSTTRRINNNggg", history.location.pathname.split('/').pop())
    const id = parseInt(idString, 10)


    const [product, setProduct] = useState(id);

    useEffect(() => {

        async function getProduct() {
            const response = await fetch(`/api/products/detail/${id}`)

            if (response.ok) {
                const data = await response.json();
                setProduct(data);
                // history.push(`/products/detail/${id}`);
                // console.log("hissssttooorryyy", history)
            }

        }
        getProduct()
    }, [id])


    return (
        <>
            <div className="productDetail-wrapper">
                <div className="productDetail-image-wrapper">
                    <img className="productDetail-image" alt={product.image} src={`/images/${product.image}`}></img>
                </div>
                <div className="productDetail-info-wrapper">
                    <div className="productDetail-info-container">
                        <h1 className="productDetail-name">{product.name}</h1>
                        <div className="productDetail-descriptiondes">Description</div>
                        <div className="productDetail-description">{product.description}</div>
                        <div className="productDetail-sizesavail">Available sizes</div>
                        <div className="productDetail-sizes">{product.size}</div>
                        <div className="productDetail-pricepr">Price</div>
                        <div className="productDetail-price">${product.price}</div>
                    </div>
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
