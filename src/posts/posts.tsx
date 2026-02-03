import React, {useEffect, useState} from 'react';
import {IPost} from "../model/postsModel";
import Post from "../post/post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((data:IPost[]) => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map((post: IPost) => (
                    <Post post = {post} key = {post.id}/>
                ))
            }
        </div>
    );
};

export default Posts;