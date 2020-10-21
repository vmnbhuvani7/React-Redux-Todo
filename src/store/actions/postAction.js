import { ADD_POST, DELETE_POST } from "../type/postType"

export const addPost = (post) => {
    return { type: ADD_POST, post }
}
export const deletePost = (id) => {
    return { type: DELETE_POST, id }
}