import { useLoaderData, Form } from 'react-router-dom';

export const loginLoader = ({request}: any) => {
    return new URL(request.url).searchParams.get("message")
}

export const loginAction = () => {
    console.log('Action function');
    return null;
}

export const Login = () => {
    const message = useLoaderData();

    return (
        <div>
            <h1>Sign in to your account</h1>
            {message as string && <h2>{message as string}</h2>}
            <Form method="post">
                <input 
                    name='email'
                    type='email'
                    placeholder='Email address'
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                />
                <button>LOGIN</button>
            </Form>
        </div>
    )
}