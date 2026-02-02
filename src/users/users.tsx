import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../model/usersModel";
import User from "../user/user";

type IChooseProps = {
    choose:(user:IUser) => void;
}
const Users:FC<IChooseProps> = ({choose}) => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((value:IUser[]) => {
                setUsers(value);
            })
    }, []);
    return (
        <div>
            {
                users.map((res:IUser)=>
                <User choose = {choose} user={res} key={res.id}/>)
            }
        </div>
    );
};

export default Users;