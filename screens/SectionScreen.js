import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const SectionScreen = ({ navigation }) => {
	return (
		<Container>
			<Text>Hola</Text>
			<Button title='Close' onPress={() => navigation.goBack()}></Button>
		</Container>
	);
};

export default SectionScreen;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
