import React from "react"
import {UsersListController} from "../../controllers"

const Container = () => (
    <div className="app">
        <h1 className={"app-title"}>Table of users</h1>
        <div className={"app-container"}>
            <UsersListController />
        </div>
    </div>
)

export default Container