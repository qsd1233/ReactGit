import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginVal} from '../actions';

const mapDispatchToProps = {
    onClick:loginVal
}

export default connect(null,mapDispatchToProps)(Login);