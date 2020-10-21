import { ADD_POST, DELETE_POST } from "../type/postType";

const initialState = {
    posts: [
        { id: 1, title: "1st post", content: "This is Post One" },
        { id: 2, title: "2nd post", content: "This is Post Two" }
    ]
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost,
            }
        case ADD_POST:
            return {
                posts: [action.post, ...state.posts],
            }
        default:
            return state
    }
};

export default postReducer;