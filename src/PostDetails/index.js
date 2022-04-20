import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from 'react-router';
import { ROUTES } from "../Routes";
import axios from 'axios';
import { MetaContext } from '../MetaProvider';

const path = "posts";

const PostDetails = () => {
    const history = useNavigate()
    const location = useLocation();
    const { setMeta } = useContext(MetaContext);

    const { id } = useParams();
    const [postId, setPostId] = useState("");
    const [data, setData] = useState({});
    console.log("location..", location);

    const getPostData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/${path}/${postId}`).then((result) => {
            console.log("result", result.data);
            setData(result.data);
            const metaData = {
                title: result.data.title,
                url: `${window.location.href}/${postId}`,
                description: result.data.body
            }
            setMeta(metaData);
        }).catch((e) => {
            console.log("something went wrong...");
            history(`${ROUTES.post}`)
        });
    }


    useEffect(() => {
        console.log("location...........", location, id);
        if (!id) {
            console.log("location", location);
            if (!location?.state?.id) {
                history(ROUTES.post);
                window.scroll({ top: 0, behavior: 'smooth' });
            } else {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const postID = location.state.id
                setPostId(postID);
            }
        } else {
            history(`${ROUTES.post_detail}`, { state: { id: id } })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    useEffect(() => {
        console.log("postid", postId);
        if (postId) {
            getPostData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId])

    useEffect(() => {
        return () => {
            setMeta({
                title: "Sitemap",
                description: "Sitemap seo testing",
                url: window.location.href
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="tool-detail">
            {data ?
                <>
                    <h1>
                        {data.title}
                    </h1>
                    <h3>
                        {data.body}
                    </h3>
                </>
                :
                <h3>Loading...</h3>
            }
        </div >
    )
}

export default PostDetails;