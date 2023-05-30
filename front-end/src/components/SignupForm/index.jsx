import React, { useState } from 'react';
import { Input, Button } from 'components';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 실행
    // email과 password 값 사용
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
          onChange={handlePasswordChange}
        />

        <Button className='w-full' type="submit" variant="FillBlue70001" shape="RoundedBorder5" size="sm">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export { SignupForm };
