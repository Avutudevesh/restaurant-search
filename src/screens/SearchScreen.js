import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";
const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose",
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};
	useEffect(() => {
		searchApi("pasta");
	}, []);
	return (
		<View style={styles.viewBackground}>
			<SearchBar
				term={term}
				onTermChanged={setTerm}
				onSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>{`We have found:${results.length}`}</Text>
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
