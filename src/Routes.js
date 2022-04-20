import { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Routes as Routers,
    Route
} from 'react-router-dom';

// Common pages
const PageNotFound = lazy(() => import( /* webpackChunkName: "PageNotFound" */ "./NotFound"));
const Home = lazy(() => import( /* webpackChunkName: "Home" */ "./Home"));
const PostDetails = lazy(() => import( /* webpackChunkName: "PostDetails" */ "./PostDetails"));
const Post = lazy(() => import( /* webpackChunkName: "Post" */ "./Post"));


export const ROUTES = {
    post: '/post',
    post_detail: '/post-details',
    post_detail_id: '/post-details/:id',
    home: '/',
};

const Routes = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <BrowserRouter>
                <Routers>
                    <Route exact path={ROUTES.post} element={<Post />} />
                    <Route exact path={ROUTES.post_detail} element={<PostDetails />} />
                    <Route exact path={ROUTES.post_detail_id} element={<PostDetails />} />
                    <Route exact path={ROUTES.home} element={<Home />} />

                    <Route path="*" element={<PageNotFound />}></Route>
                </Routers>
            </BrowserRouter >
        </Suspense >
    );
};

export default Routes;
