//ホーム
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Authenticator} from '@aws-amplify/ui-react-native';
import {decodeJWT, fetchAuthSession} from "aws-amplify/auth";

function PostPage() {
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
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  fetchAuthSession().then((session) => {
      console.log(String(session.tokens?.accessToken));
  })


  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView style={main_styles.container}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={main_styles.container.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={main_styles.scrollView}>
            <View style={main_styles.centerContainer}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color:"white"}}>投稿画面</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default PostPage;
