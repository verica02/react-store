import React from 'react';
import {Link} from "react-router-dom";
import PayPalButton from "./PayPalButton";
import "./Cart.css";
export default function CartTotals({value,history}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                испразни кошничка
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">меѓузбир :</span>
                            <strong>{cartSubTotal}ден.</strong>
                        </h5>
                        <h5>
                            <span className="text-title">данок : </span>
                            <strong>{cartTax}ден.</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Вкупно :</span>
                            <strong>{cartTotal}ден.</strong>
                        </h5>
                        <div className="paypal">
                         <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>   
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );       
}
