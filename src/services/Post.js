import axios from 'axios'
import { rootLocal, rootOnline } from './Config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${ root ? rootLocal : rootOnline }/${ path }`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

export default Post;