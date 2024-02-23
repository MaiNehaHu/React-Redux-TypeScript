import React from 'react'
import './DashBoard.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoggedUserDetails } from '../../Store/Slices/LoggedUserSlice.ts';
import { useNavigate } from 'react-router-dom';

const DashBoard: React.FC = () => {
    const className = "DashBoard";
    const dispatch = useDispatch();
    const navigateTo = useNavigate()

    const userDetails = useSelector((state: any) => {
        return state.loggedUser;
    })

    function handleLogout() {
        dispatch(setLoggedUserDetails({ userName: null, userMail: null, userPassword: null }));

        navigateTo('/');
    }

    return (
        <main className={className + " flex-center-mid"}>
            <div className={className + "__details"}>
                <h1>Name: {userDetails.userName}</h1>
                <p>User ID: {userDetails.key}</p>
                <p>Mail: {userDetails.userMail}</p>

                <button onClick={handleLogout} type="button" className={className + "__logoutBtn Btn"}>Log Out</button>
            </div>
        </main>
    )
}

export default DashBoard