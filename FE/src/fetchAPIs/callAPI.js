import * as constant from '../constants'
export default function callAPI ( method, path, data ) {
    let objFetch = {}
    if ( method === constant.HTTP_READ || method === constant.HTTP_DELETE) {
        objFetch = {
            method
        }
    } else {
        objFetch = {
            method,
            headers: constant.HTTP_HEADER_JSON,
            body: JSON.stringify(data)
        }
    }
    return new Promise((resolve, reject) => {
        const url = constant.DOMAIN + path
        fetch(url, objFetch)
            .then((res) => resolve(res.json()))
            .catch((err) => reject(err))
    });
}