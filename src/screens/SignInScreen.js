import React, { useContext, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthenticationForm';

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => clearErrorMessage());

    return unsubscribe;
  }, [navigation]);

  const handleSignin = ({ email, password }) => {
    signin({ email, password });
    if (state.errorMessage !== '') {
      ToastAndroid.showWithGravity(state.errorMessage, 15, ToastAndroid.BOTTOM);
    }
  };

  return (
    <AuthForm
      headerText="SignIn"
      submitButtontext="SignIn"
      onSubmit={handleSignin}
      linkText="Dont have an account? Sign Up"
      linkTo="SignUp"
    />
  );
};

export default SignInScreen;
