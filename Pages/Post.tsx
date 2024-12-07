import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function PostPage() {
  const isDarkMode = false; // ダークモード設定（必要に応じて変更可能）

  const main_styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    backButton: {
      fontSize: 18,
      color: '#007AFF',
    },
    postButton: {
      backgroundColor: '#00BFFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      elevation: 2,
    },
    postButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textInput: {
      borderColor: '#cccccc',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
      width: '100%',
      backgroundColor: '#f8f8f8',
    },
    imagePreview: {
      width: Dimensions.get('window').width * 0.9,
      height: 150,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#cccccc',
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    textLabel: {
      fontSize: 14,
      color: '#999999',
      marginBottom: 5,
    },
  });

  return (
    <SafeAreaView style={main_styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={main_styles.container.backgroundColor}
      />

      {/* ヘッダー */}
      <View style={main_styles.header}>
        <TouchableOpacity>
          <Text style={main_styles.backButton}>{'< Back'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={main_styles.postButton}>
          <Text style={main_styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* 画像URLエリア */}
      <View>
        <Text style={main_styles.textLabel}>Image-url</Text>
        <View style={main_styles.imagePreview}>
          <Text>Image Preview</Text>
        </View>
      </View>

      {/* 位置情報入力 */}
      <TextInput
        placeholder="location"
        style={main_styles.textInput}
      />

      {/* 投稿内容入力 */}
      <TextInput
        placeholder="content"
        style={[
          main_styles.textInput,
          { height: 100, textAlignVertical: 'top' },
        ]}
        multiline
      />
    </SafeAreaView>
  );
}

export default PostPage;
