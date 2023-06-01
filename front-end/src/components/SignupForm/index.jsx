import React, { useState } from "react";
import { Input, Button } from "components";
import axios from "axios";
import { API_BASE_URL } from "api";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isMismatch, setMismatch] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, passwordConfirm);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  const checkPasswordMatch = (password, passwordConfirm) => {
    setMismatch(password !== passwordConfirm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/auth/new-user`).then(({ data }) => {
      alert(`새로 생성된 아이디는 ${data.id} 입니다.`);
    });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <Input
          label="Email: "
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <Input
          label="Password: "
          type="password"
          value={password}
          className={isMismatch ? "password-mismatch" : ""}
          onChange={handlePasswordChange}
        />

        <Input
          label="Confirm Password: "
          type="password"
          value={passwordConfirm}
          className={isMismatch ? "password-mismatch" : ""}
          onChange={handlePasswordConfirmChange}
        />

        <Button
          className="w-full"
          type="submit"
          variant="FillBlue70001"
          shape="RoundedBorder5"
          size="sm"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export { SignupForm };
