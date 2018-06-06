import { connect } from 'react-redux'
import UserMap from '../component/user-map'

const mapStateToProps = (state) => ({
    solditem: state.soldlist.list,
    soldtotal: state.soldlist.soldTotal
});

const mapDispatchToProps = (dispatch) => ({

})

const UserMapC = connect(mapStateToProps, mapDispatchToProps)(UserMap);

export default UserMapC;