import React, { useState } from "react";
import { Input, Button } from "components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/reducer";
import { API_BASE_URL } from "api";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API_BASE_URL}/auth/${email}`);

      const { token } = res.data;
      localStorage.setItem("token", token);
      const user = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      // localStorage.setItem("user", JSON.stringify(user.data));
      dispatch(login(user.data));
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <Input label="Email: " value={email} onChange={handleEmailChange} />

        <Input
          label="Password: "
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <Button
          className="w-full"
          type="submit"
          variant="FillBlue70001"
          shape="RoundedBorder5"
          size="sm"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export { LoginForm };
