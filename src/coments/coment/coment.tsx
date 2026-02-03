import React, {FC} from 'react';
import {IComent} from "../../model/comentModel";

interface IComentProps {
    coment:IComent;
}
const Coment:FC<IComentProps> = ({coment}) => {
    return (
        <div key={coment.id}>
            <p>{coment.postId}</p>
            <p>{coment.id}</p>
            <p>{coment.name}</p>
            <p>{coment.email}</p>
            <p>{coment.body}</p>
        </div>
    );
};

export default Coment;