import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import { addPost } from '../store/actions/postAction';

const AddPostHook = () => {
    const [Post, setPost] = useState({
        id: '',
        title: '',
        content: ''
    })
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setPost({
            ...Post,
            [event.target.name]: [event.target.value]
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addPost(Post))
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

export default AddPostHook
