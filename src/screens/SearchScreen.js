import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	return (
		<View style={styles.viewBackground}>
			<SearchBar />
			<Text>Search Screen Demo</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewBackground: {
		backgroundColor: "white",
		flex: 1,
	},
});

export default SearchScreen;
