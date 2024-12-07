// ログイン画面をここに記述(yomi4486)
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions, Modal,
  Button, TextInput
} from 'react-native';

import { Amplify } from 'aws-amplify';
import {signUp} from 'aws-amplify/auth';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: "us-west-2_9Tap2vGIU",
      userPoolClientId: "7tm4cg6q800ns7rc663d2p8e0r",
      loginWith: {
        email: true,
        username: true,
      },
    }
  }
})

function LoginPage({navigation}:{navigation:any}) {
  const isDarkMode = useColorScheme() === 'dark';
  const main_styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    centerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.8,
      borderRadius: Dimensions.get('window').width * 0.05,
      backgroundColor: "#fefefe",
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      width: Dimensions.get('window').width * 0.8,
      borderWidth: 1,
      padding: 10,
      color: 'black',
    },
  });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={main_styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={main_styles.container.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={main_styles.scrollView}>
        <View style={main_styles.centerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
            {"ログイン画面"}
          </Text>
          <TextInput
              style={main_styles.input}
          />
          <TextInput
              style={main_styles.input}
          />
          <Button
            title="ログイン"
            onPress={async () => {
              try {

                let result = await signUp({
                  username: "test",
                  password: "test",
                });

                console.log(result);
                console.log("ログインしました");
                setModalVisible(!modalVisible)
              }catch (e) {
                console.log(e)
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default LoginPage;
