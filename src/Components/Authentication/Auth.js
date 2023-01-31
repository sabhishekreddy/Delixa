import React from 'react'
import "./Auth.css"

import Recovery from './Recovery/Recover';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { useNavigate } from 'react-router';

import { useSelector } from 'react-redux';


export default function Auth() {
    const navigate = useNavigate();

    var currentUser = useSelector(state => state.user);
    console.log(currentUser)
    if (currentUser === ""){
        return (
            <div id='AuthMain'>
            <div id='AuthLeft'>
                <SignIn />
                <Recovery />
            </div>
            <SignUp />
        </div>);
    }else{
    return (
        <h1>{currentUser}</h1>
    )
    }
}