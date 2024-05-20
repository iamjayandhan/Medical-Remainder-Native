import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { withTheme } from 'react-native-elements';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Screen, CustomText } from '../components';

const ResolveAuthScreen = ({ navigation, theme }) => {
  // Check for Authentication Persistance or any other Auth Changes 
  useEffect(() => {
    const cleanup = () => {
      setTimeout(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            navigation.replace("Home");
          } else {
            navigation.replace("Login");
          }
        });
      }, 3000);
    };
    cleanup();
  }, []);

  return (
    <Screen style={{ justifyContent: "center" }}>
      <CustomText h2 fontWeight="bold" style={{ marginBottom: 20 }}>
        Opening ...
      </CustomText>
      <ActivityIndicator color={theme.text.dark} size="large" />
    </Screen>
  );
}

export default withTheme(ResolveAuthScreen);
