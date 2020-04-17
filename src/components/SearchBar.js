import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
	return (
		<View style={styles.viewBackground}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput style={styles.inputStyle} placeholder="Search" />
		</View>
	);
};

const styles = StyleSheet.create({
	viewBackground: {
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		margin: 15,
		flexDirection: "row",
	},
	inputStyle: {
		marginLeft: 10,
		flex: 1,
	},
	iconStyle: {
		fontSize: 32,
		alignSelf: "center",
		marginHorizontal: 15,
	},
});

export default SearchBar;
