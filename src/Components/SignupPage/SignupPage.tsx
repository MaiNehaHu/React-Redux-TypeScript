import React, { useState } from 'react';
import './SignupPage.scss';
import { useDispatch } from 'react-redux';
import { Signup } from '../../Store/Slices/usersListSlice';
import { newUserFlag } from '../../Store/Slices/newUserStatusSlice';
import { Link } from 'react-router-dom';

interface UserData {
  key: string;
  userName: string;
  userMail: string;
  userPassword: string;
}

const SignupPage: React.FC = () => {
  const className = 'SignupPage';
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState<UserData>({
    key: "",
    userName: "",
    userMail: "",
    userPassword: "",
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  }

  function handleSignup() {
    dispatch(Signup(userDetails));
    dispatch(newUserFlag(false));
  }

  return (
    <main className={`${className} flex-center-mid`}>
      <form action='submit' onSubmit={handleSignup} className={`${className}__form`}>
        <h1>Sign Up</h1>

        <input
          required
          onInput={handleInput}
          type="text"
          name="userName"
          placeholder="Your Name"
          minLength={2}
          maxLength={15}
          className={`${className}__input inputField`}
        />
        <input
          required
          onInput={handleInput}
          type="email"
          name="userMail"
          placeholder="Your email"
          className={`${className}__input inputField`}
        />
        <input
          required
          onInput={handleInput}
          type="password"
          name="userPassword"
          placeholder="Your Password"
          className={`${className}__input inputField`}
        />

        <button type='submit' className={`${className}__loginBtn Btn`}>
          Log in
        </button>

        <Link to="/" onClick={() => dispatch(newUserFlag(false))}>Already have an account</Link>
      </form>
    </main>
  );
};

export default SignupPage;
