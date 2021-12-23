import React from "react"
import {UserModel} from "../../models"

interface IProps {
    user: UserModel
}

export const UserView = ({ user }: IProps) => {
    console.log("user in user view: ", user)
    return(
            <li className={"user-item"}>
                <div className={"user-fullname"}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
                <div className={"user-username"}>{`${user.login.username}`}</div>
                <div className={"user-icon"}>
                    <img src={String(user.picture.thumbnail)} className={"icon-frame"}/>
                </div>
            </li>
    )
}