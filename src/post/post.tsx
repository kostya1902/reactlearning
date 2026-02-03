import React, {FC} from 'react';
import {IPost} from "../model/postsModel";

interface IPostProps {
    post: IPost;
}
const Post:FC<IPostProps> = ({post}) => {
    return (
        <div key={post.id}><p>ID: {post.userId}</p><p>Number: {post.id}</p><p>Title: <br></br> {post.title}</p><p>Text:<br></br> {post.body}</p></div>

    );
};

export default Post;