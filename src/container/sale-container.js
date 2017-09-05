import { connect } from 'react-redux'
import Sale from '../component/Sale'

const mapStateToProps = (state) => ({
    products :  state.staticData[1].daysale
})

const mapDispatchToProps = (dispatch) => ({

})

const SaleList = connect(mapStateToProps, mapDispatchToProps)(Sale)

export default SaleList