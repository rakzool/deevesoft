import React, { useState } from "react";

import "./Loginpage.styles.scss";
import CustomFormInput from "../../components/CustomeFormInput/CustomeFormInput.component";
import CustomeButton from "../../components/CustomeButton/CustomeButton.component";
import { auth } from "../../firebase-config";

import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let Style = {
    backgroundColor: "#FF2E32",
    border: "none",
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((results) => {
        navigate("/dashboard/profile");
        return results;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  async function loginUser() {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser();
    setUser({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="container-main" onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-header">
          <h1>LOG-IN</h1>
        </div>
        <div className="content-top">
          <p>I Already have an account</p>
        </div>
        <form>
          <CustomFormInput
            type="email"
            name="email"
            label="email"
            value={user.email}
            handleChange={handleChange}
            required
          />

          <CustomFormInput
            type="password"
            name="password"
            label="password"
            value={user.password}
            handleChange={handleChange}
            required
          />

          <div className="button-flex">
            <CustomeButton type="submit">Sign in</CustomeButton>
            <CustomeButton style={Style} onClick={loginWithGoogle}>
              Sign in with Google
            </CustomeButton>
          </div>
        </form>
      </div>
      <div className="register-section">
        <div className="new-user">
          <span>New-user?</span>
          <Link to="/register">
            <span>Register Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
