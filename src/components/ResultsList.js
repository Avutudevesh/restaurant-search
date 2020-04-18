import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
	return (
		<View style={styles.constainer}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	constainer: {
		marginBottom: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
});
export default ResultsList;
