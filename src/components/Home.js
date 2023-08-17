import React from 'react'

function Home(props) {
    console.warn("props",props)
    return (
        <div>
           
            <h1>SHOPPING-CART UI</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: Rs100000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:100000,name:'i phone 14 pro'})}
                        }>
                        Add To Cart</button>
                        <button className='remove-cart-btn'
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;