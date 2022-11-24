import * as types from '../constants'
import * as actions from '../actions/ItemAction'
import {takeEvery,put} from 'redux-saga/effects'
import callApi from '../fetchAPIs/callAPI'
import importAPI from '../fetchAPIs/importAPI'

function* handleGet(){
        try {
            const res = yield callApi('GET','')
            yield put(actions.getSuccess({ listData : res.listData }))
        } catch (error) {
            yield put(actions.getFailure(error))
        }
}
function* handleImport(data){
        try {
            let file = data.payload.file
            let form = new FormData()
            form.append('file', file[0])
            yield importAPI(form)
            yield put(actions.importSuccess())
            yield put(actions.getRequest())
        } catch (error) {
            yield put(actions.importFailure(error))
        }
    }
function* handleDelete(data){
    try {
        yield callApi('DELETE',`/${data.payload.id}`)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}
function* handleAdd(data) {
    try {
        yield callApi('POST','',data.payload)
        yield put(actions.addSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.addFailure({ error }))
    }
}
function* handleUpdate(data) {
    try {
        yield callApi('PUT', `/${data.payload.id}`, { age: data.payload.age, name: data.payload.name })
        yield put(actions.updateSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.updateFailure({ error }))
    }
}
 const ItemSaga = [
    takeEvery(types.GET_REQUEST, handleGet),
    takeEvery(types.IMPORT_REQUEST, handleImport),
    takeEvery(types.DELETE_REQUEST, handleDelete),
    takeEvery(types.ADD_REQUEST, handleAdd),
    takeEvery(types.UPDATE_REQUEST, handleUpdate),
]

export default ItemSaga;