import React, { useEffect, useState } from 'react'
import logo from '../logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../Routes';

const path = "posts";
const Post = () => {
    const [data, setData] = useState([]);
    const history = useNavigate();

    const getPostList = () => {
        axios.get(`https://jsonplaceholder.typicode.com/${path}`).then((result) => {
            console.log("result", result.data);
            setData(result.data);
        })
    }

    useEffect(() => {
        getPostList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const postDetails = (id) => {
        history(`${ROUTES.post_detail}`, { state: { id: id } })
    }

    return (
        <div className="todo-container">
            {data.map((todo, index) =>
                <div key={index} className={`todo ${todo.completed ? "todo-completed" : "todo-incompleted"} `} onClick={() => postDetails(todo.id)}>
                    <div>
                        <p>
                            {todo.id}
                        </p>
                        <h3>{todo.title}</h3>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Post



