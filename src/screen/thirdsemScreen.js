import React from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";

const thirdsemScreen =()=>{
	const uni=[{no: 1,name:"swe 4301",key:"1"},
	{no: 2,name:"swe 4304",key:"2"},
	{no: 3,name:"swe 4303",key:"3"},
	{no: 4,name:"swe 4305",key:"4"},
	{no: 5,name:"swe 4307",key:"5"},
	{no: 6,name:"swe 4309",key:"6"},
];
	return(
		<View style={styles.viewStyle}>
			<FlatList
				data={uni}
				renderItem={function({item}){
				return(<Text style={styles.textStyle}>{item.no}. {item.name}</Text>);}
	
		}
		/>
	</View>
	);
};

const styles = StyleSheet.create(
	{
		textStyle :{
			fontSize:20,
			color:"black",
			marginVertical:10,
			marginLeft:5,
		},
		viewStyle:{

		}
	}
);
export default thirdsemScreen;