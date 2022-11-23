import * as types from '../constants'

//get
export function getRequest(payload){
    return{
        type: types.GET_REQUEST,
        payload
    }
}
export function getSuccess(payload){
    return{
        type: types.GET_SUCCESS,
        payload
    }
}
export function getFailure(payload){
    return{
        type: types.GET_FAILURE,
        payload
    }
}
//add
export function addRequest(payload){
    return{
        type: types.ADD_REQUEST,
        payload
    }
}
export function addSuccess(payload){
    return{
        type: types.ADD_SUCCESS,
        payload
    }
}
export function addFailure(payload){
    return{
        type: types.ADD_FAILURE,
        payload
    }
}
//delete
export function deleteRequest(payload){
    return{
        type: types.DELETE_REQUEST,
        payload
    }
}
export function deleteSuccess(payload){
    return{
        type: types.DELETE_SUCCESS,
        payload
    }
}
export function deleteFailure(payload){
    return{
        type: types.DELETE_FAILURE,
        payload
    }
}
//update
export function updateRequest(payload){
    return{
        type: types.UPDATE_REQUEST,
        payload
    }
}
export function updateSuccess(payload){
    return{
        type: types.UPDATE_SUCCESS,
        payload
    }
}
export function updateFailure(payload){
    return{
        type: types.UPDATE_FAILURE,
        payload
    }
}
//export
export function exportRequest(payload){
    return{
        type: types.EXPORT_REQUEST,
        payload
    }
}
export function exportSuccess(payload){
    return{
        type: types.EXPORT_SUCCESS,
        payload
    }
}
export function exportFailure(payload){
    return{
        type: types.EXPORT_FAILURE,
        payload
    }
}
//import
export function importRequest(payload){
    return{
        type: types.IMPORT_REQUEST,
        payload
    }
}
export function importSuccess(payload){
    return{
        type: types.IMPORT_SUCCESS,
        payload
    }
}
export function importFailure(payload){
    return{
        type: types.IMPORT_FAILURE,
        payload
    }
}