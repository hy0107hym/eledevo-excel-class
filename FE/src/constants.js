// domain
export const DOMAIN = "http://localhost:3001/item";
export const IMPORT = "http://localhost:3001/item/excel";
// export const DOMAIN 
export const LIMIT = 3;

// HTTP method 
export const HTTP_READ = "GET"
export const HTTP_CREATE = "POST"
export const HTTP_UPDATE = "PUT"
export const HTTP_DELETE = "DELETE"

// HTTP headers
export const HTTP_HEADER_JSON = {"Content-Type": "Application/json"}

// types of actions
//get
export const GET_REQUEST='GET_REQUEST'
export const GET_SUCCESS='GET_SUCCESS'
export const GET_FAILURE='GET_FAILURE'

//ADD
export const ADD_REQUEST='ADD_REQUEST'
export const ADD_SUCCESS='ADD_SUCCESS'
export const ADD_FAILURE='ADD_FAILURE'
//DELETE
export const DELETE_REQUEST='DELETE_REQUEST'
export const DELETE_SUCCESS='DELETE_SUCCESS'
export const DELETE_FAILURE='DELETE_FAILURE'
//update
export const UPDATE_REQUEST='UPDATE_REQUEST'
export const UPDATE_SUCCESS='UPDATE_SUCCESS'
export const UPDATE_FAILURE='UPDATE_FAILURE'
//export
export const EXPORT_REQUEST='EXPORT_REQUEST'
export const EXPORT_SUCCESS='EXPORT_SUCCESS'
export const EXPORT_FAILURE='EXPORT_FAILURE'
//import
export const IMPORT_REQUEST='IMPORT_REQUEST'
export const IMPORT_SUCCESS='IMPORT_SUCCESS'
export const IMPORT_FAILURE='IMPORT_FAILURE'
