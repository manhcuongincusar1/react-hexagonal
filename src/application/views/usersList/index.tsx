import React from "react"

import "./index.css"
import {UserModel} from "../../models"
import {UserView} from "../user"

interface IProps {
    users: Array<UserModel>
    setPag: React.Dispatch<React.SetStateAction<{
        page: number;
        results: number;
    }>>
}

export const UsersListView = ({ users }: IProps) => {
    console.log("User in list: ", users)
    return(
        users.length > 0
        ? <div>
            
            <ul className={"users-list"}>
                {users.map((user: UserModel, index: number) => <UserView key={index} user={user}/>)}
            </ul>
        </div>
        : <div className={"users-list empty"}>
            User List empty
        </div>
    )
   }