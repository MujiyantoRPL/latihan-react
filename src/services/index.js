import Delete from './Delete';
import Get from './Get';
import Post from './Post';
import Update from './Update';


const getData = () => Get(`post?_sort=id&_order=desc`, true)
const getUser = () => Get(`users`, false)
const getPhoto = () => Get(`photos`, false)

const postData = (data) => Post(`post`, true, data)

const updateData = (data, id) => Update(`post/${ id }`, true, data)

const deleteData = (id) => Delete(`post/${id}`, true)

const API = {
    getData,
    getUser,
    postData,
    updateData,
    deleteData,
    getPhoto
}

export default API;