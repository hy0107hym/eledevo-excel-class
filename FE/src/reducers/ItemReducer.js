import * as types from '../constants'

const DEFAULT_STATE={
    listItem:[],
    isFetching:false,
    dataFetched:false,
    error:false,
    errorMessage:null,
    totalPage:1,
    activePage:1,
    nameSearch:null
}

export default  (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case types.GET_REQUEST:
        case types.ADD_REQUEST:
        case types.DELETE_REQUEST:
        case types.UPDATE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.ADD_SUCCESS:
        case types.DELETE_SUCCESS:
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listItem: action.payload.listData
            }
        case types.GET_FAILURE:
        case types.ADD_FAILURE:
        case types.UPDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: "anh loi"
            }

        default:
            return state
    }
}