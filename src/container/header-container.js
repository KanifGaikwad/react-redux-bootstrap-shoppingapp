import { connect } from 'react-redux'
import Header from '../component/Header'
import {setactivebutton} from "../action/product-actions";

const mapStateToProps = (state) => ({
    activeTab : state.activeButtonId
})

const mapDispatchToProps = (dispatch) => ({
    setactivebutton : (tabid) =>{
        dispatch(setactivebutton(tabid))
    }
})

const TabHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default TabHeader