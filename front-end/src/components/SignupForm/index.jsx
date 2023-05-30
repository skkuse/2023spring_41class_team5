import React, { useState } from 'react';
import { Input, Button } from 'components';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isMismatch, setMismatch] = useState(false);  // 상태값 추가

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 실행
    // email, password, passwordConfirm 값 사용
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
          className={isMismatch ? 'password-mismatch' : ''} // 상태값에 따라 클래스 부여
          onChange={handlePasswordChange}
        />

        <Input
          label="Confirm Password: "
          type="password"
          value={passwordConfirm}
          className={isMismatch ? 'password-mismatch' : ''} // 상태값에 따라 클래스 부여
          onChange={handlePasswordConfirmChange}
        />

        <Button className='w-full' type="submit" variant="FillBlue70001" shape="RoundedBorder5" size="sm">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export { SignupForm };
