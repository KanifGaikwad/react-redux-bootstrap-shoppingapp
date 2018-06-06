import React from 'react'
import Products from '../container/product-container'
import Sale from '../container/sale-container'
import Cart from '../container/cart-container'


const Header = ({setactivebutton, activeTab, cartItem, soldItem}) => {
    const ActiveTab = () => {
        if (activeTab === 'PRODUCT') {
            return <Products/>;
        } else if (activeTab === 'SALE') {
            return <Sale/>;
        } else if (activeTab === 'CART') {
            return <Cart/>;
        } else {
            return <div/>;
        }
    }

    return (
        <div id="wrap">
            <nav className="navbar navbar-default">
                <a className="navbar-brand">The Shop</a>
            </nav>
            <div className="btn-group btn-group-justified" role="group">
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('PRODUCT')} type="button" className="btn btn-default"><span
                        className="glyphicon glyphicon-align-left" aria-hidden="true"></span>Chat
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('SALE')} type="button" className="btn btn-default"><span
                        className="glyphicon glyphicon-share glyphicon-align-left" aria-hidden="true"></span>Todays sale
                        <span className="badge badge-default badge-pill">{soldItem}</span>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('CART')} type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-shopping-cart glyphicon-align-left" aria-hidden="true">
                        </span>Cart
                        <span className="badge badge-default badge-pill">{cartItem}</span>
                    </button>
                </div>
            </div>

            <ActiveTab/>
            <footer className="footer">
                <div className="container">
                    <span className="badge badge-info">Kanifnath Gaikwad   </span>
                    <a href='https://www.linkedin.com/in/kanifnath-gaikwad-18867845/'>LinkedIn Me </a>- Happy to help!
                </div>
            </footer>

        </div>
    )
}

export default Header;