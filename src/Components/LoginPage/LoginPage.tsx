import React, { useState } from 'react'
import './LoginPage.scss';
import { useSelector } from 'react-redux';
import { setLoggedUserDetails } from '../../Store/Slices/LoggedUserSlice';
import { useDispatch } from 'react-redux';
import { newUserFlag } from '../../Store/Slices/newUserStatusSlice';
import { Link, useNavigate } from 'react-router-dom';

interface loginData {
  loginName: string;
  loginPassword: string;
}

interface data {
  userName: string;
  userMail: string;
  userPassword: string;
}

const LoginPage: React.FC = () => {
  const className = "LoginPage";
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const usersList = useSelector((state: any) => {
    return state.usersList
  })

  const [userDetails, setUserDetails] = useState<loginData>({
    loginName: '',
    loginPassword: '',
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  }

  function handleLogin() {
    if (userDetails.loginName == "" || userDetails.loginPassword == "") {
      alert("You have not typed any of the things");
      return;
    }

    let userToLogin = usersList.find(
      (user: data) => user.userMail === userDetails.loginName || user.userName === userDetails.loginName
    );

    if (userToLogin) {
      if (userToLogin.userPassword === userDetails.loginPassword) {
        dispatch(setLoggedUserDetails(userToLogin));

        navigateTo(`/UserDashBoard:${userToLogin.userName}`);
      } else {
        alert('Wrong password');
      }

    } else {
      alert("It seems you don't have an account.");

      dispatch(newUserFlag(true));
    }
  }

  return (
    <main className={className + " flex-center-mid"}>
      <form action='submit' onSubmit={handleLogin} className={className + "__form"}>
        <h1>Log in</h1>

        <input required onInput={handleInput} type="text" name="loginName" placeholder='UserName or email' className={className + "__input inputField"} />
        <input required onInput={handleInput} type="password" name="loginPassword" placeholder='Your Password' className={className + "__input inputField"} />

        <button type='submit' className={className + "__loginBtn Btn"}>Log in</button>

        <Link to="/" onClick={() => dispatch(newUserFlag(true))}>Don't have an account</Link>
      </form>
    </main>
  )
}

export default LoginPage