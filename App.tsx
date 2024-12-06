/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
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


// const router = useRouter()
// const params = useLocalSearchParams();

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? "#e9e9e9" : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
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
              console.log("ボタンが押されました！");
              // router.push('/Pages/Login.tsx');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;