import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import theme from '../configs/theme.config';

const AuthenticationForm = ({ headerText, submitButtontext, onSubmit, linkText, linkTo }) => {
  const navigation = useNavigation();
  const insets = useSafeArea();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.container,
      }}
    >
      <Headline style={styles.titleStyle}>{headerText}</Headline>
      <Input
        label="Your Email Address"
        placeholder="email@address.com"
        leftIcon={<MaterialCommunityIcons name="email-check-outline" size={22} color="black" />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        placeholder="Password"
        leftIcon={<Foundation name="lock" size={22} color="black" />}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button
        mode="contained"
        style={styles.submitBtn}
        labelStyle={styles.btnTitle}
        onPress={() => onSubmit({ email, password })}
      >
        {submitButtontext}
      </Button>
      <Button mode="text" labelStyle={styles.link} onPress={() => navigation.navigate(linkTo)}>
        {linkText}
      </Button>
    </View>
  );
};

export default AuthenticationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    padding: 30,
  },
  titleStyle: {
    color: theme.colors.primary,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  submitBtn: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 40,
  },
  btnTitle: {
    flex: 1,
    alignSelf: 'center',
  },
  link: {
    color: theme.colors.primary,
  },
});
