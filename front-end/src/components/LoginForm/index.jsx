import React, { useState } from "react";
import { Input, Button, HintModal } from "components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/reducer";
import { API_BASE_URL } from "api";
import { useModal } from './useModal';

function LoginForm() {
  const hintModal = useModal();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
      hintModal.openModal("그런 아이디는 없습니다!")
      console.error(error);
    }
  };

  return (
    <div className="signup-form-container">
      {hintModal.isVisible && (
        <HintModal
          // ... other props ...
          hint={hintModal.modalData} // Pass the hint string to the modal
          onClose={hintModal.closeModal}
        />
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <Input label="아이디: " value={email} onChange={handleEmailChange} />

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
