import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChanged, onSubmit }) => {
	return (
		<View style={styles.viewBackground}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				value={term}
				style={styles.inputStyle}
				placeholder="Search"
				onChangeText={(newTerm) => onTermChanged(newTerm)}
				onEndEditing={(term) => onSubmit(term)}
			/>
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
