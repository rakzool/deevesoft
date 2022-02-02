import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";

import "./RegisterPage.styles.scss";
import CustomeButton from "../../components/CustomeButton/CustomeButton.component";
import CustomFormInput from "../../components/CustomeFormInput/CustomeFormInput.component";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passStatus, setpassStatus] = useState(true);
  const [content, setContent] = useState("");

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      ).catch((err) => alert(err.message));
      await updateProfile(auth.currentUser, {
        displayName: newUser.fullname,
      }).catch((err) => alert(err.message));
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      registerUser();
      setNewUser({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setpassStatus(false);
      setContent("Password did not match");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <div className="register-container">
      <div className="form-area">
        <div>
          <h1>Register </h1>
          <form onSubmit={handleSubmit}>
            <div className={`${passStatus ? "no-error" : "error"}`}>
              {content}
            </div>
            <CustomFormInput
              type="text"
              name="fullname"
              label="Full Name"
              value={newUser.fullname}
              handleChange={handleChange}
              required
            />
            <CustomFormInput
              type="email"
              name="email"
              label="Email"
              value={newUser.email}
              handleChange={handleChange}
              required
            />
            <CustomFormInput
              type="password"
              name="password"
              label="Password"
              value={newUser.password}
              handleChange={handleChange}
              required
            />
            <CustomFormInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={newUser.confirmPassword}
              handleChange={handleChange}
              required
            />

            <span>
              <CustomeButton>Register</CustomeButton>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
