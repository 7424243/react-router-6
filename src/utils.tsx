import { redirect } from 'react-router-dom';

// not working!
export const requireAuth = () => {
    const isLoggedIn = false;
  
    if (!isLoggedIn) {
        return redirect('/login?message=You must log in first')
    }
    return null;
  };
