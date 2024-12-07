//ホーム
import React from 'react';
import {
    Modal,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import {Authenticator} from '@aws-amplify/ui-react-native';
import {fetchAuthSession} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";
import {Link} from "expo-router";

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
                <Modal visible={true} transparent animationType="slide">
                    <View style={styles.container}>
                        {/* Close Button */}
                        <TouchableOpacity style={styles.closeButton}>
                            <Link href={"/"} style={styles.closeButtonText}>✖</Link>
                        </TouchableOpacity>

                        {/* Form */}
                        <View style={styles.form}>
                            {/* Image Upload */}
                            <View style={styles.imageUpload}>
                                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.imagePlaceholder} />
                            </View>

                            {/* Text Inputs */}
                            <TextInput style={styles.input} placeholder="地名、店名など" />
                            <TextInput
                                style={[styles.input, styles.detailsInput]}
                                placeholder="詳細"
                                multiline
                                numberOfLines={4}
                            />
                            {/* Submit Button */}
                            <TouchableOpacity style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>投稿</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Authenticator>
        </Authenticator.Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 24,
        color: '#000',
    },
    form: {
        backgroundColor: '#eee',
        borderRadius: 10,
        width: '90%',
        padding: 20,
    },
    imageUpload: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: 60,
        height: 60,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    input: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    detailsInput: {
        height: 80,
        textAlignVertical: 'top',
    },
    notificationContainer: {
        marginBottom: 20,
    },
    notificationLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    notificationOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeInput: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: 60,
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#c5c5c5',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PostPage;
