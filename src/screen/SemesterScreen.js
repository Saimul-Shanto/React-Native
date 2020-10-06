import React from "react";
import {Text,StyleSheet, View, Button,Image} from "react-native";

const SemesterScreen = (props)=>{
    console.log(props)
    return (<View>
        <Button
        title = "1st"
        onPress={
            function(){
                console.log(props)
                props.navigation.navigate("Course-list");
            }
        }
        />
        <Button
        title = "2nd"
        onPress={
            function(){
                props.navigation.navigate("Course");
            }
        }
        />
        <Button
        title = "3rd"
        onPress={
            function(){
                props.navigation.navigate("Course-List");
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
            color:"blue",
        },

        
});
export default SemesterScreen;