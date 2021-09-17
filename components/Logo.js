import React from "react";
import styled from "styled-components";

const Logo = ({ image, text }) => {
	return (
		<Container>
			<Image source={image} resizeMode='contain' />
			<Text>{text}</Text>
		</Container>
	);
};

export default Logo;

const Container = styled.View`
	width: 125px;
	flex-direction: row;
	background: #fff;
	height: 60px;
	padding: 12px 6px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	align-items: center;
	margin: 0 8px;
`;

const Image = styled.Image`
	width: 36px;
	height: 36px;
`;

const Text = styled.Text`
	font-weight: 600;
	font-size: 17px;
	margin-left: 8px;
`;
