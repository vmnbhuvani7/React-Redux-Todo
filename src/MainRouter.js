import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddPostHook from './component Hook/AddPostHook';
import PostListHook from './component Hook/PostListHook';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AddPostHook} />
                    <Route exact path="/postListHook" component={PostListHook} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
