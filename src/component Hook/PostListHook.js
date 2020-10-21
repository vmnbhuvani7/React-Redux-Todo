import React from 'react'
import {  useSelector } from 'react-redux';

import PostDetailHook from './PostDetailHook';

const PostListHook = () => {
    const { posts } = useSelector(state => state)

    return (
        <div className="container">
            <div className="row">
                {posts &&
                    posts.map((post) =>
                        <PostDetailHook post={post} key={post.id} />
                    )}
            </div>
        </div>
    )
}

export default PostListHook
