import React from "react";
import {Text,StyleSheet, View, Button,Image} from "react-native";

const ProfileScreen = (props)=>{
    console.log(props)
    return (<View>
        <Image style={styles.imageStyle}
        
        source = {require('./../../assets/sh.jpg')}
        />
        <Text style={styles.textStyle}>Md Saimul Haque Shanto</Text> 
        <Text style={styles.textStyle}>ID : 170042080</Text> 
        <Text style={styles.textStyle}>Room No : 522, North</Text> 
        <Text style={styles.textStyle}>Email : saimulhaque@iut-dhaka.edu</Text> 
       
        </View>
        );
}

const styles = StyleSheet.create({
        textStyle:{
            marginLeft:4,
            fontSize:20,
            color:"black",

        },
        imageStyle:{
            height:110,
            width:110,
            marginLeft:115,
        },
        
});

export default ProfileScreen;