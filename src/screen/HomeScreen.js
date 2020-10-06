import React from "react";
import {Text,StyleSheet, View, Button,Image,TouchableOpacity,TouchableHighlight} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = (props)=>{
    console.log(props)
    return (<View>
        <Image style={styles.imageStyle}
        
        source = {require('./../../assets/iut.png')}
        />
        <Text style={styles.textStyle}>Department of CSE</Text> 
        <Text style={styles.textStyle}>Programme : SWE</Text> 

        <TouchableOpacity style={styles.touchableopacityStyle}
        onPress={function(){
            props.navigation.navigate("Profile");
        }
        }
        >
        <Text style={styles.touchabletextStyle}>My Profile</Text>
        </TouchableOpacity>

        <Button 
        title = "List of Faculty Members"
        color="#00A2FF"
        onPress={
            function(){
                props.navigation.navigate("Faculty-List");
            }
        }
        />
        <Button 
        title = "Semester wise Course List"
        color="#00A2FF"
        onPress={
            function(){
                props.navigation.navigate("Semesters");
            }
        }
        />
        
        </View>
        );
}

const styles = StyleSheet.create({
        textStyle:{
            marginLeft:85,
            fontSize:20,
            color:"black",
        },
        imageStyle:{
            height:180,
            width:110,
            marginLeft:115,
        },
        touchableopacityStyle:{
            paddingLeft:140,
            padding:10,
            marginLeft:0,
            fontSize:250,
            borderWidth: 0,
            width: 400,
            height: 40,
            backgroundColor:"#00A2FF",
            
        },
        touchabletextStyle:{
           color:"white", 
        },
        
});

export default HomeScreen;