const actions = {
    GET_ALL_DATA_REQUEST: 'GET_ALL_DATA_REQUEST',
    GET_ALL_DATA_REQUEST: 'GET_ALL_DATA_REQUEST_SUCCESS',
    GET_ALL_DATA_REQUEST: 'GET_ALL_DATA_REQUEST_ERROR',
    // action creator - functions that exist to return a plain objects
    getAllData: () => ({
        type: actions.GET_ALL_DATA_REQUEST
    })
}
export default actions;