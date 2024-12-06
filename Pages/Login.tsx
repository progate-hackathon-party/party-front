// ログイン画面をここに記述(yomi4486)
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import { Button } from 'react-native-elements';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


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
    }
  });
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
          <Button
            style={{ margin: 20, width: Dimensions.get('window').width * 0.5, backgroundColor: "#D4D4FF", borderRadius: 30 }}
            title="ログイン"
            onPress={() => {
              console.log("ボタンが押されました！");
              navigation.navigate("HomePage")
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginPage;
