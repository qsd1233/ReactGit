import { put, takeLatest, all } from 'redux-saga/effects';

function* searchAuth(e){
    console.log('saga')
    console.log(e.id)
    console.log(e.pw)
    let loginResult = null;
    if(e.id === 'qsd1233' && e.pw === '1234'){
        loginResult = true
    }else {
        loginResult = false
    }

    const result = {
        "auth":loginResult
    }
    yield put({type:'AUTH_RESULT', _result:result})
}

function* actionWatcher(){
    yield takeLatest('TRANSFER', searchAuth)
}
export default function* rootSaga(){
    yield all([
        actionWatcher()
    ]);
}