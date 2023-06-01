import React from "react";
import { Button } from "components";
import axios from "axios";
import { API_BASE_URL } from "api";

function SignupForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/auth/new-user`).then(({ data }) => {
      alert(`새로 생성된 아이디는 ${data.id} 입니다.`);
    });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">

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
