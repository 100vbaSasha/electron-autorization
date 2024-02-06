import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../UserContext';
import { useNavigate } from "react-router-dom";
import '../App.css';

interface LoginFormInputs {
    username?: string;
    password?: string;
}

const LoginForm: React.FC = () => {
    const { login } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        if (data.username === 'test' && data.password === 'test') {
            login({ username: data.username });
            navigate('/user');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <p>Use creds username: test, password: test.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        { ...register("username", { required: true }) }
                    />
                    {errors?.username && <p>Username is required</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: true }) }
                    />
                    {errors?.password && <p>Password is required</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;