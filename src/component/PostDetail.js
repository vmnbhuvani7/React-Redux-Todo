import React from 'react'
import { connect } from 'react-redux';

import { deletePost } from '../store/actions/postAction';

const PostDetail = (props) => {
    const { post } = props

    return (

        <div className="col s12 m6">
            <div className="card ">
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className="card-action">

                    <button className="btn red" onClick={() => props.deletePost(post.id)}>Delete</button>

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(PostDetail)
