import * as constant from '../constants'
export default function importAPI(data) {
    return new Promise((resolve, reject) => {
        const url = constant.IMPORT
        fetch(url, {
            method: 'POST',
            body:data
        })
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err))
    })
} 