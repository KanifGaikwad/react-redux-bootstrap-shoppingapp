import { connect } from 'react-redux'
import User from '../component/user-list'

const mapStateToProps = (state) => ({
    solditem: state.soldlist.list,
    soldtotal: state.soldlist.soldTotal
});

const mapDispatchToProps = (dispatch) => ({

})

const UserC = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserC;