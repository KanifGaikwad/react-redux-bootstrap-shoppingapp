import { connect } from 'react-redux'
import Sale from '../component/Sale'

const mapStateToProps = (state) => ({
   solditem: state.soldlist.list,
    soldtotal: state.soldlist.soldTotal
});

const mapDispatchToProps = (dispatch) => ({

})

const SaleList = connect(mapStateToProps, mapDispatchToProps)(Sale);

export default SaleList;