import React, { useState } from 'react'
import { connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import { addPost } from '../store/actions/postAction';

const AddPost = (props) => {
    const [Post, setPost] = useState({
        id: '',
        title: '',
        content: ''
    })

    const changeHandler = (event) => {
        setPost({
            ...Post,
            [event.target.name]: [event.target.value]
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.createPost(Post)
        setPost({
            id: uuidv4(),
            title: '',
            content: ''
        })
    }
    return (
        <div className="container" style={{ margin: "4rem auto" }}>
            <h5 className="blue-text center-align">CandBlog</h5>
            <form onSubmit={submitHandler}>
                <div className="input-field">
                    <label>Title</label>
                    <input type="text" name="title" onChange={(e) => changeHandler(e)} value={Post.title} />
                </div>
                <div className="input-field">
                    <label>Content</label>
                    <textarea type="content" name="content" className="materialize-textarea" onChange={changeHandler} value={Post.content}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn blue">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(addPost(post))
        },
    };
};

export default connect(null, mapDispatchToProps)(AddPost)
