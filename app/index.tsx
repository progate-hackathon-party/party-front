import React, {useEffect, useState} from 'react';
import {router} from "expo-router";
import {
    Dimensions,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomePage({ navigation }: { navigation: any }) {
    const isDarkMode = useColorScheme() !== 'dark';
    const main_styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        scrollView: {
            flexGrow: 1,
        },
        centerContainer: {
            justifyContent: 'flex-start',  // テキストを上に配置
            alignItems: 'center',
            flex: 1,
            paddingTop: 20,  // 上部に少し余白を追加

        },
        box: {
            width: Dimensions.get('window').width *0.88,  // ボックスの幅
            height: Dimensions.get('window').height *0.45, // ボックスの高さ
            backgroundColor: '#ffffff77', // 白い背景
            justifyContent: 'flex-start', // 内容を中央揃え
            alignItems: 'center', // 内容を中央揃え
            borderRadius: 10, // 角を丸める
            shadowColor: '#000', // シャドウの色
            shadowOffset: { width: 0, height: 1 }, // シャドウの位置
            shadowOpacity: 0.1, // シャドウの濃さ
            shadowRadius: 5, // シャドウのぼかし具合
            padding:10
        },
    });

    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/posts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const data = await result.json();
                setData(data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, []);

    return (
        <SafeAreaView style={main_styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={main_styles.container.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={main_styles.scrollView}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={[isDarkMode ? {color:"#ffffff"} : {color:"#000000"}, {fontSize: 30, paddingLeft: 25, fontWeight: 'bold'}]}>
                        近くのセール
                    </Text>
                </View>

                <View style={main_styles.centerContainer}>
                    <View style={main_styles.box}>
                        {data
                        ?data.posts.map((post: any) => {
                                return (
                                    <><View style={{
                                        paddingLeft: 60,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        paddingRight: 80,
                                        padding: 10
                                    }}>
                                        <Image
                                            source={require("../assets/images/map_icon.png")}
                                            style={[styles.image, {marginTop: 10, marginRight: 15}]} // 横並び用のスタイル
                                        />
                                        <View style={{alignItems: 'flex-start'}}>
                                            <Text style={{
                                                fontSize: 25,
                                                fontWeight: 'bold',
                                                color: isDarkMode ? '#ffffff' : '#000000'
                                            }}>
                                                {post.attribute_values.name}
                                            </Text>
                                            <Text style={{
                                                fontSize: 10,
                                                fontWeight: 'bold',
                                                color: isDarkMode ? '#ffffff' : '#000000'
                                            }}
                                                  numberOfLines={3} // 1行に制限
                                                  ellipsizeMode="tail" // 文字数を超えた場合に「...」を追加
                                            >
                                                📍 {post.attribute_values.content}
                                            </Text>
                                        </View>
                                    </View>
                                        <Text style={{fontSize: 7}}>_________________________________________________________________________</Text></>
                                )
                            })
                        :<SafeAreaView/>
                        }
                    </View>
                </View>

            </ScrollView>
            {/* 右下に配置される要素 */}
            <View style={styles.container}>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        router.push("/map")
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
const insertLineBreaks = (text: string, maxLength: number): string => {
    const regex = new RegExp(`(.{1,${maxLength}})`, 'g'); // 最大 maxLength ごとに分割
    return text.match(regex)?.join('\n') ?? ""; // 分割した文字列を改行で結合
};

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
