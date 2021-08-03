import axios from 'axios'
import { rootLocal,rootOnline } from "./Config"

const Get = (path, root) =>
{
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? rootLocal : rootOnline }/${ path }`).then((result) =>
        {
            resolve(result.data)
        }, (err) =>
        {
            reject(err)
        })
    })
    return promise;
}

export default Get;
