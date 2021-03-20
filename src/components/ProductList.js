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
                    <a href="#store"><button className="shop-now ">Производи</button></a>
                    </div>
                    
    <section class="about py-5" id="about">
<div class="container">

<div class="row">

<div class=" col-10 mx-auto col-md-6 my-5">

<h1 class="text-capitalize">за <strong
 class="banner-title">Нас</strong> 
 </h1>

<p class="my-4 text-muted w-75">
Ние сме овластени продавачи на Samsung и Huawei телефоните, кај нас секогаш можете да ги најдете најновите и најпопуларните телефони од овие брендови.
Сите понуди се достапни за ограничен период само затоа што сакаме да ги чуваме нашите специјални производи што е можно поактуелни.
Нашата единствена понуда на услуги не значи документи или редици. Вашиот нов уред ќе ви биде доставен веднаш до вашата врата без никогаш да мора да ја напуштите вашата канцеларија или дом. 
Без банкарски извештаи. Нула ризик!
<br></br><br></br>
<a href="#footer"><button className="explore">Повеќе</button></a>
</p>


</div>

<div class="col-10 mx-auto col-md-6 my-5 align-self-center">
<div class="about-img_container">
<img src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/e-commerce-deutschland-t.jpg" class="img-fluid" alt=""/>

</div>
</div>
</div>
</div>
</section>
                    <div className="container " id="store">

                        <Title name="" title="производи" />
                        
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
               <div>
                   
            </div> 
                
            </React.Fragment>
               // <Product />
            
        )
    }
}
