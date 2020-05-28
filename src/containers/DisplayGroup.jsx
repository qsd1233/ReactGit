import { connect } from 'react-redux';
import DisplayGroup from '../components/DisplayGroup';

function mapStateToProps(state){
    if(state === undefined){
        return {id:''}
    }else if(state.returnVal.auth === true){
        return {...state, id:'Login Success'}
    }else {
        return {...state, id:'No id or pw'}
    }
}

export default connect(mapStateToProps)(DisplayGroup);