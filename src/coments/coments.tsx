import React, {useEffect, useState} from 'react';
import {IComent} from "../model/comentModel";
import Coment from "./coment/coment";

const Coments = () => {

    const [coments, setComents] = useState<IComent[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments/")
            .then(res => res.json())
            .then((data:IComent[]) => setComents(data))
    }, []);
    return (
        <div>
            {coments.map((coment) => (
              <Coment coment={coment} key={coment.id} />
            ))}

        </div>
    );
};

export default Coments;