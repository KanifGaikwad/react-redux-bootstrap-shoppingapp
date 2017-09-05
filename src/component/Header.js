import React from 'react'
import Products from '../container/product-container'
import Sale from '../container/sale-container'


const Header = ({setactivebutton, activeTab}) => {

    const ActiveTab = () => {
        if(activeTab === 'PRODUCT'){
            return <Products />;
        }else if(activeTab === 'SALE'){
            return <Sale />;
        }else{
            return <div />;
        }
    }

    return(
        <div>
            <nav className="navbar navbar-default">
                <a className="navbar-brand">React App</a>
            </nav>
            <div className="btn-group btn-group-justified" role="group" >
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('PRODUCT')} type="button" className="btn btn-default"><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>Products</button>
                </div>
                <div className="btn-group" role="group">
                    <button onClick={() => setactivebutton('SALE')} type="button"  className="btn btn-default"><span className="glyphicon glyphicon-share glyphicon-align-left" aria-hidden="true"></span>Todays sale</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-thumbs-up glyphicon-align-left" aria-hidden="true"></span>Manage</button>
                </div>
            </div>

            <ActiveTab />

        </div>
    )

}

export default Header;