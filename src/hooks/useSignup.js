import { useState, useEffect } from 'react';
import { projectAuth } from '../components/firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup the user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete the signup');
      }

      // add display name to the user
      await res.user.updateProfile({ displayName: displayName });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // update state
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { error, isPending, signup };
};
