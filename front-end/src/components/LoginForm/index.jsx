import React, { useState } from 'react';
import { Input, Button } from 'components';

function LoginForm() {
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
        // 로그인 로직 실행
        // email, password 값 사용
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={handleSubmit} className="login-form">
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
                    Log In
                </Button>
            </form>
        </div>
    );
}

export { LoginForm };
