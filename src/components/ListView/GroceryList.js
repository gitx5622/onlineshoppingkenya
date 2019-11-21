import React, { Component } from 'react'
import {GroceryListURL} from '../../constants';
import axios from 'axios';
import Navbar from '../../containers/Navbar';
import '../../css/Layout.css';
import '../../css/ListView.css';

class GroceryList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [],
        }
    }
    
        componentDidMount() {
             axios
               .get(GroceryListURL)
               .then(res => {
                 this.setState({ data: res.data});
               })
           }
         
          
        render() {
            const data = this.state.data;
            return (
    <div>
        <Navbar/>
                <div className="row" style={{margin: "30px"}}>
                {data.map(product=>{ return (
        <div key={product.title} className="col-md-3 col-sm-6">
            <div className="product-grid4">
            <div className="product-image4">
                <a href="javasript:;" onClick={() => this.props.history.push(`grocery/${product.id}/`)}>
                    <img className="pic-1" src={product.imageurl1} alt="#"></img>
                    
                </a>
                <ul className="social">
                    <li><a href="javasript:;" onClick={() => this.props.history.push(`grocery/${product.id}/`)} producta-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                    <li><a href="/login" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                    <li><a href="/login" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
                <span className="product-new-label">New</span>
                <span className="product-discount-label">{product.discount_price}%</span>
            </div>
            <div className="product-content">
                <h3 className="title"><a href="/login">{product.title}</a></h3>
                <div className="price">
                $ {product.price} &nbsp;
                    <span>20.00</span>
                </div>
                
                <button className="add-to-cart" onClick={(e)=>{if(window.confirm('Your item has been added to Cart')){this.handleAddToCart(e, product)}}}>ADD TO CART</button>
            
            </div>
            </div>
        </div> 
                )})}  
        </div>
    </div>
            )
        }
    }

export default GroceryList
