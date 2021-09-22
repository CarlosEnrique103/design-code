import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const CoursesScreen = ({ navigation }) => {
	return (
		<Container>
			<Text>Courses</Text>
		</Container>
	);
};

export default CoursesScreen;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
