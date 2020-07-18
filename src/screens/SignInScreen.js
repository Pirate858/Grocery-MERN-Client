import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Sign In</Text>
      <Button title="Go to Home-Page" onPress={() => navigation.navigate('Homepage')} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
