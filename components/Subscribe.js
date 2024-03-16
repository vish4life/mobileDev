import * as React from 'react';
import { Text, ScrollView, View, Pressable, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const Subscribe = () => {
    const [showInfo, setShowInfo] = React.useState(false);
    const [email, onChangeEmail] = React.useState('');
    const renderSubscription = () => {
        if (email === '') {
            alert('Please enter Email');
        } else {
            setShowInfo(!showInfo);
            alert('Thanks for Subscribing, Stay tuned!');
            onChangeEmail('');
        }
    }
    return (
        <KeyboardAvoidingView style={subStyle.container} behavior={ Platform.OS === 'ios'?'padding':'height'}>
            <ScrollView indicatorStyle='gray' keyboardDismissMode='on-drag'>
                <Image tintColor='#495E57' style={subStyle.image} source={(require('../images/backgroundImage.png'))} />
                <Text style={subStyle.infoTxt}>
                    Subscribe to our newsletter for our latest delicious receipes!
                </Text>
                <TextInput
                    style={subStyle.input}
                    placeholder='Type your email'
                    onChangeText={onChangeEmail}
                    value={email}
                    keyboardType='email-address'
                />
                {!showInfo ?
                    <Pressable style={subStyle.btn} onPress={() => renderSubscription()}>
                        <Text style={subStyle.btnTxt}>Subscribe</Text>
                    </Pressable>
                    :
                    <View style={subStyle.btnAfter}>
                        <Text style={subStyle.btnTxtAfter}>Subscribe</Text>
                    </View>
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
export default Subscribe;
const subStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: '15%',

    },
    infoTxt: {
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: '5%',
    },
    input: {
        marginHorizontal: '15%',
        marginVertical: '10%',
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
    },
    btn: {
        marginHorizontal: '15%',
        marginVertical: '5%',
        borderRadius: 8,
        backgroundColor: '#495E57',
        height: 40,
        justifyContent: 'center',
    },
    btnTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    btnAfter: {
        marginHorizontal: '15%',
        marginVertical: '5%',
        borderRadius: 8,
        backgroundColor: '#BFBFBF',
        height: 40,
        justifyContent: 'center',
    },
    btnTxtAfter: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
});