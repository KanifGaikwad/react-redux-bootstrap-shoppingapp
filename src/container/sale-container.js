import { connect } from 'react-redux'
import Sale from '../component/Sale'

const mapStateToProps = (state) => ({
    products :  state.soldlist
})

const mapDispatchToProps = (dispatch) => ({

})

const SaleList = connect(mapStateToProps, mapDispatchToProps)(Sale)

export default SaleList