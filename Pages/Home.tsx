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
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function HomePage() {
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
            // 基本的にはここにウィジェットを配置していく
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
                {"ホーム"}
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
