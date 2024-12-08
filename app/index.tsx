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
    View,
    Button,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import {Tabs} from "expo-router"
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomePage() {
    const show_datail = () => {
        console.log("ok!")
        
    }
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
        modal: {
    justifyContent: 'flex-end',  // モーダルを画面下に配置
    margin: 0,  // デフォルトの余白をなくす
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
    });
    const [isModalVisible,setModalVisible] = useState(false)

    // モーダルの表示/非表示をトグルする関数
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
        <SafeAreaView style={main_styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={main_styles.container.backgroundColor}
            />
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal} // バックグラウンドをタップしたときにモーダルを閉じる
                onSwipeComplete={toggleModal} // スワイプでモーダルを閉じる
                swipeDirection="down" // スワイプ方向を設定
                style={styles.modal} // モーダルのスタイル
            >
                <View style={styles.modalContent}>
                    <View style={{  flexDirection: 'row', alignItems: 'flex-start', padding: 10 }}>
                            
                            <View style={{ alignItems: 'flex-start' ,marginRight:40}}> {/* ここを変更 */}
                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: isDarkMode ? '#000000' : '#ffffff' }}>
                                    aaa店
                                </Text>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: isDarkMode ? '#696969' : '#eeeeee' }}>東京都ーーーーーー１−３ー３</Text>
                                <Text style={{ paddingTop: 13, fontSize: 15, fontWeight: 'bold', color: isDarkMode ? '#696969' : '#ffffff' }}>
                                📍 ラーメン一郎店 🍜 特製味噌ラーメンが500円引き！ 📅 セール期間: 12月10日〜12月20日 ⏰ 営業時間: 11:00〜22:00 ✨ 注目ポイント: セール期間中はトッピング1品無料！
                                </Text>

                            </View>
                            <Text style={{ paddingLeft: 18, paddingTop: 47, fontSize: 18, fontWeight: 'bold', color: isDarkMode ? '#ffffff' : '#000000' }}>8m</Text>
                        </View>
                    <Button title="閉じる" onPress={toggleModal} />
                </View>
            </Modal>
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={main_styles.scrollView}>
                
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={[isDarkMode ? {color:"#ffffff"} : {color:"#000000"}, {fontSize: 30, paddingLeft: 25, fontWeight: 'bold'}]}>
                        近くのセール
                    </Text>
                </View>

                <View style={main_styles.centerContainer}>
                    {/* 四角いボックス */}
                    <View style={main_styles.box}>
                        <View style={{ paddingLeft: 60, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 80, padding: 10 }}>
                            <Image
                                source={require("../assets/images/map_icon.png")}
                                style={[styles.image, { marginTop: 10, marginRight: 15 }]} // 横並び用のスタイル
                            />
                            <View style={{ alignItems: 'flex-start' }}> {/* ここを変更 */}
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: isDarkMode ? '#ffffff' : '#000000' }}>
                                    aaa店
                                </Text>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: isDarkMode ? '#ffffff' : '#000000' }}
                                      numberOfLines={3}  // 1行に制限
                                      ellipsizeMode="tail"  // 文字数を超えた場合に「...」を追加
                                >
                                    📍 ラーメン一郎店 🍜 特製味噌ラーメンが500円引き！ 📅 セール期間: 12月10日〜12月20日 ⏰ 営業時間: 11:00〜22:00 ✨ 注目ポイント: セール期間中はトッピング1品無料！
                                </Text>
                            </View>
                            <Text style={{ paddingLeft: 18, paddingTop: 47, fontSize: 18, fontWeight: 'bold', color: isDarkMode ? '#ffffff' : '#000000' }}>8m</Text>
                        </View>
                        <Text style={{ fontSize: 7}}>_________________________________________________________________________</Text>
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
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
                <Tabs.Screen
                    name="index"
                    options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }}
                />
            </Tabs>
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
    modal: {
        justifyContent: 'flex-end',  // モーダルを画面下に配置
        margin: 0,  // デフォルトの余白をなくす
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 20,
      },
});

export default HomePage;
