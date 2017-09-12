import React from 'react'
import Products from '../container/product-container'
import Sale from '../container/sale-container'
import Cart from '../container/cart-container'


const Header = ({setactivebutton, activeTab}) => {

    const ActiveTab = () => {
        if(activeTab === 'PRODUCT'){
            return <Products />;
        }else if(activeTab === 'SALE'){
            return <Sale />;
        }else if(activeTab === 'CART'){
            return <Cart />;
        }else{
            return <div />;
        }
    }

    return(
        <div id="wrap">
            <nav className="navbar navbar-default">
                <a className="navbar-brand">React-Redux-BootStrap App</a>
            </nav>
            <div className="btn-group btn-group-justified" role="group" >
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('PRODUCT')} type="button" className="btn btn-default"><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>Products</button>
                </div>
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('SALE')} type="button"  className="btn btn-default"><span className="glyphicon glyphicon-share glyphicon-align-left" aria-hidden="true"></span>Todays sale</button>
                </div>
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('CART')} type="button" className="btn btn-default"><span className="glyphicon glyphicon-shopping-cart glyphicon-align-left" aria-hidden="true"></span>Cart</button>
                </div>
            </div>

            <ActiveTab />

            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Contact us - kanif888@live.com</span>
                    <span className="text-muted">   Phone - +91 9730106333 </span>
                </div>
            </footer>

        </div>
    )

}

export default Header;