import * as React from 'react';
import {Text, ScrollView, Pressable, StyleSheet, Image, View } from 'react-native';

const Welcome = ({navigation}) => {
    // console.log("inside welcome screen");
    return(
        <ScrollView style={welStyle.container}>
            <View><Text style={welStyle.header1}>LITTLE</Text>
            <Image style={welStyle.image} source={(require('../images/backgroundImage.png'))} />
            <Text style={welStyle.header2}>LEMON</Text>
            </View>
            <Text style={welStyle.infoTxt}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Pressable style={welStyle.btn} onPress={()=> navigation.navigate('Subscribe')}>
                <Text style={welStyle.btnTxt}>Newsletter</Text>
            </Pressable>
        </ScrollView>
    );
};
export default Welcome;
const welStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    header1:{
        color:'#495E57',
        textAlign:'center',
        marginTop:'25%',
        marginBottom:8,
        fontSize:50,
    },
    header2:{
        color:'#495E57',
        textAlign:'center',
        marginBottom:'25%',
        marginTop:8,
        fontSize:50,
    },
    image:{
        width:200,
        height:200,
        alignSelf:'center',
        resizeMode:'contain',
    },
    infoTxt:{
        fontSize:30,
        textAlign:'center',
        marginHorizontal:'15%',
    },
    btn:{
        marginHorizontal:'15%',
        marginVertical:'20%',
        borderRadius:8,
        backgroundColor:'#495E57',
        height:40,
        justifyContent:'center',
    },
    btnTxt:{
        textAlign:'center',
        color:'white',
        fontSize:25,
    },
});