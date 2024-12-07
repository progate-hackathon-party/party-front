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
import {fetchAuthSession} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";

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

function PostPage() {
    fetchAuthSession().then((session) => {
        console.log(session.tokens?.accessToken.toString());
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

export default PostPage;
