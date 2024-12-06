/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

// ページの読み込み
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import PostPage from "./Pages/Post";

import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

import {
  Button 
} from 'react-native-elements'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App() { // インスタンス全体で継承されるナビゲーター（この画面はHome）
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="PostPage" component={PostPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const router = useRouter()
// const params = useLocalSearchParams();

function HomeScreen({navigation}:{navigation:any}): React.JSX.Element {
  const isDarkMode = useColorScheme() == 'dark';
  const main_styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    centerContainer: {
      justifyContent:'center',
      alignItems:'center',
      width:Dimensions.get('window').width *0.9,
      height:Dimensions.get('window').height *0.8,
      borderRadius:Dimensions.get('window').width *0.05, // 角丸
      backgroundColor:"#fefefe",
      // ドロップシャドウ
      shadowColor:"#000000",
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
        <View  
          style={main_styles.centerContainer}>        
          <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>
          {"タイムセールの場所と様子を\n投稿できる地図アプリ"}
          </Text>
          <Button
            style={{margin:20,width:Dimensions.get('window').width *0.5,backgroundColor:"#D4D4FF",borderRadius:30}}
            title="ログイン"
            onPress={ () => {
              navigation.navigate("LoginPage")
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;