import axios from 'axios'
import { rootLocal, rootOnline } from './Config'

const Update = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${ root ? rootLocal : rootOnline }/${ path }`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise
}

export default Update