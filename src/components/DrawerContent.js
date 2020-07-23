import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../configs/theme.config';
import { Context as AuthContext } from '../context/AuthContext';

const DrawerContent = (props) => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <Paragraph style={{ color: theme.colors.primary }}>Hi</Paragraph>
          <Title>UserName</Title>
        </View>
        <Drawer.Section style={styles.mainSection}>
          <DrawerItem
            label="Browse"
            onPress={() => {
              props.navigation.navigate('Browse');
            }}
          />
          <DrawerItem
            label="Categories"
            onPress={() => {
              props.navigation.navigate('Explore');
            }}
          />
          <DrawerItem
            label="Checkout"
            onPress={() => {
              props.navigation.navigate('Checkout');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.logoutSection}>
        <DrawerItem
          icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size} />}
          label="Sign Out"
          onPress={() => {
            signout();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  userInfoSection: {
    marginLeft: 20,
    marginTop: 30,
  },
  mainSection: {
    marginTop: 40,
    marginLeft: 20,
  },
  logoutSection: {
    marginBottom: 25,
  },
  textColor: {
    color: theme.colors.primary,
  },
});
