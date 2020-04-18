import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};
	return (
		<View style={styles.viewBackground}>
			<SearchBar
				term={term}
				onTermChanged={setTerm}
				onSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice("$")}
					title="Cost Effective"
				/>
				<ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title="Big Spender"
				/>
			</ScrollView>
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
