import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const ProjectsScreen = ({ navigation }) => {
	return (
		<Container>
			<Text>Projects</Text>
		</Container>
	);
};

export default ProjectsScreen;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
