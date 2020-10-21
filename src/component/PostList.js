import React from 'react'
import { connect} from 'react-redux';

import PostDetail from './PostDetail'

const PostList = (props) => {
    const { posts } = props

    return (
        <div className="container">
            <div className="row">
                {posts &&
                    posts.map((post) =>
                        <PostDetail post={post} key={post.id} />
                    )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(PostList)