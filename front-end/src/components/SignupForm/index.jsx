import React, { useState } from 'react';
import { Input } from 'components';

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
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit">회원가입</button>
    </form>
  );
}

export { SignupForm };
