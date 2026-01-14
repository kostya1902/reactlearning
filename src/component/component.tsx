import './component.css'
import React from 'react';
import {simpsons} from "../data/simpsonArroy";

const Component = () => {
    return (
        <div>
            {
                simpsons.map((simpson)=>
                    <div className={'component-div'}>
                        <h1>{simpson.name}</h1>
                        <h2>{simpson.surname}</h2>
                        <h3>Вік{simpson.age}</h3>
                        <p>{simpson.info}</p>
                        <img src={simpson.photo} alt={simpson.name}/>
                    </div>
                )
            }
        </div>
    );
};

export default Component;