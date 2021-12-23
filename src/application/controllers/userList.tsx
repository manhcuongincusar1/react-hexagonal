import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
// import {UsersListView} from "../views/usersList"

import {GetUsers} from "../../domain/use-cases"
import { UserRepository } from "../../infrastructure"
import DataTable from "../views/usersTable"


export const UsersListController = () => {
    const dispatch  = useDispatch()
    // @ts-ignore
    const {users} = useSelector(({userReducer}) => userReducer)
    const [pag, setPag] = useState({page: 1, results: 10})
    useEffect(() => {
        const userRepository = new UserRepository()
        const getUsers = new GetUsers(userRepository)
        dispatch(getUsers.execute(pag.page, pag.results)) 
    }, [])
    return <DataTable users={users} setPag={setPag}/>
}