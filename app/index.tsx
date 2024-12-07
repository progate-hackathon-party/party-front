import "expo-router/entry";
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
import { Pressable, Image } from "react-native";

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {router} from "expo-router";

function HomePage() {
    const isDarkMode = useColorScheme() === 'dark';
    const main_styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        scrollView: {
            flexGrow: 1,
        },
        centerContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
    });

    return (
        <SafeAreaView style={main_styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={main_styles.container.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={main_styles.scrollView}>
                <View style={main_styles.centerContainer}>
                    {/* メインコンテンツ */}
                    <Text>ここにメインコンテンツ</Text>
                </View>
            </ScrollView>
            {/* 右下に配置される要素 */}
            <View style={styles.container}>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        router.push("/post")
                    }}
                >
                    <Image
                        source={require("../assets/images/map_icon.png")} // ローカル画像を指定
                        style={styles.image}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute", // 絶対位置を設定
        bottom: 20, // 下から20px
        right: 20, // 右から20px
    },
    button: {
        backgroundColor: "#D4D4FF",
        borderRadius: 50,
        padding: 15,
    },
    image: {
        width: 50, // 画像の幅
        height: 50, // 画像の高さ
        resizeMode: "contain", // 画像の比率を維持して縮小/拡大
    },
});

export default HomePage;
