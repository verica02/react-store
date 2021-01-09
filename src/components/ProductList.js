import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";
import{ProductConsumer} from "../context";
import "../App.css";
export default class ProductList extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">

                    <div className="image">
                        <img src="https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-1220x526/gsmarena_000.jpg" alt="phone"/>
                    <a href="#store"><button className="shop-now ">Купувај сега</button></a>
                    </div>
                    <section class="about py-5" id="about">
<div class="container">

<div class="row">

<div class=" col-10 mx-auto col-md-6 my-5">

<h1 class="text-capitalize">about <strong
 class="banner-title">Us</strong> 
 </h1>

<p class="my-4 text-muted w-75">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae est hic iusto cupiditate modi!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae est hic iusto cupiditate modi!

</p>
<a href="#store" class="explore text-uppercase">explore</a>

</div>

<div class="col-10 mx-auto col-md-6 my-5 align-self-center">
<div class="about-img_container">
<img src="https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-1220x526/gsmarena_000.jpg" class="img-fluid" alt=""/>

</div>
</div>
</div>
</div>
</section>
    
                    <div className="container " id="store">

                        <Title name="our" title="products" />
                        
                        <div className="row">
                        <ProductConsumer>
                            {value =>{
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
               // <Product />
            
        )
    }
}
