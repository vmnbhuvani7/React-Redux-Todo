import React from 'react'

import AddPostHook from './AddPostHook'
import PostListHook from './PostListHook'

const HomePageHook = () => {
    return (
        <div>
            <AddPostHook />
            <PostListHook />
        </div>
    )
}

export default HomePageHook
