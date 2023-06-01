import React from "react";
import { Button, HintModal } from "components";
import axios from "axios";
import { API_BASE_URL } from "api";
import { useModal } from './useModal';

function SignupForm() {
  const hintModal = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/auth/new-user`).then(({ data }) => {
      hintModal.openModal(`아이디는 다음과 같습니다: ${data.id}`)
    });
  };

  return (
    <div className="signup-form-container">
      {hintModal.isVisible && (
        <HintModal
          hint={hintModal.modalData} // Pass the hint string to the modal
          onClose={hintModal.closeModal}
        />
      )}
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
