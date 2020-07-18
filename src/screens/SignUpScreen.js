import React, { useContext, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthenticationForm';

const SignUpScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => clearErrorMessage());

    return unsubscribe;
  }, [navigation]);

  const handleSignup = ({ email, password }) => {
    signup({ email, password });
    if (state.errorMessage !== '') {
      ToastAndroid.showWithGravity(state.errorMessage, 15, ToastAndroid.BOTTOM);
    }
  };

  return (
    <AuthForm
      headerText="SignUp"
      submitButtontext="SignUp"
      onSubmit={handleSignup}
      linkText="Already have an account? Sign In"
      linkTo="SignIn"
    />
  );
};

export default SignUpScreen;
