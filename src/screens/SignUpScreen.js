import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import theme from '../configs/theme.config';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeArea();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
        padding: 30,
      }}
    >
      <Text h3 style={styles.titleStyle}>
        SignUp
      </Text>
      <Input
        label="Your Email Address"
        placeholder="email@address.com"
        leftIcon={<MaterialCommunityIcons name="email-check-outline" size={22} color="black" />}
      />
      <Input label="Password" placeholder="Password" leftIcon={<Foundation name="lock" size={22} color="black" />} />
      <Button title="SignUp" buttonStyle={styles.signUpBtn} titleStyle={styles.btnTitle} />

      <Button
        title="Do You Already have an Account?Login"
        type="clear"
        titleStyle={styles.logInBtn}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  titleStyle: {
    color: theme.colors.primary,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  signUpBtn: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 40,
  },
  btnTitle: {
    flex: 1,
    alignSelf: 'center',
  },
  logInBtn: {
    color: theme.colors.primary,
  },
});
