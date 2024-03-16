import * as React from 'react';
import {Text, View, StyleSheet, } from 'react-native';

const Footer = ({}) => {
    return(
        <View style={footStyle.container}>
            <Text style={footStyle.infoTxt}>All rights reserved &copy; Little Lemon</Text>
        </View>
    );
};
export default Footer;
const footStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    infoTxt:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        
    },
});