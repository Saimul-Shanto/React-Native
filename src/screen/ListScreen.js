import React from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";

const ListScreen =()=>{
	const uni=[{no: 1,name:"Ashraful Alam Khan",key:"1"},
	{no: 2,name:"Mohayeminul Islam",key:"2"},
	{no: 3,name:" Sohel Ahmed",key:"3"},
	{no: 4,name:"Lutfun Nahar Lota",key:"4"},
	{no: 5,name:"Dr. Md. Abdul Hakim",key:"5"},
	{no: 6,name:"Tasnim Ahmed",key:"6"},
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
export default ListScreen;