import { useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom';

export const loginLoader = ({request}: any) => {
    return new URL(request.url).searchParams.get("message")
}

//replaces handleSubmit function
export const loginAction = async ({request}: any) => {
    const formData = await request.formData();
    try {
        const email = formData.get('email'); //string matches the name of the input
        const password = formData.get('password'); //string matches the name of the input
        return 'login function ran successfully'; //in reality, this would be the login api call and then redirect to next page
    } catch (e) {
        return e; //error handling within the action
    }
}

export const Login = () => {
    const message = useLoaderData();
    const action = useActionData();
    const navigation = useNavigation(); //can help handle loading states
    console.log('navigation: ', navigation)

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