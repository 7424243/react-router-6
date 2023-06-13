import { useLoaderData, Form } from 'react-router-dom';

export const loginLoader = ({request}: any) => {
    return new URL(request.url).searchParams.get("message")
}

//replaces handleSubmit function
export const loginAction = async ({request}: any) => {
    const formData = await request.formData();
    const email = formData.get('email'); //string matches the name of the input
    const password = formData.get('password'); //string matches the name of the input
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