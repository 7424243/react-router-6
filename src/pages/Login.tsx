import { useState } from 'react'

export const Login = () => {
    const [loginFormData, setLoginFormData] = useState({email: '', password: ''});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('loginFormData: ', loginFormData);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    name='email'
                    onChange={handleChange}
                    type='email'
                    placeholder='Email address'
                    value={loginFormData.email}
                />
                <input 
                    name='password'
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                    value={loginFormData.password}
                />
                <button>LOGIN</button>
            </form>
        </div>
    )
}