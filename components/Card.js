import React from "react";
import styled from "styled-components";

const Card = ({ background, caption, logo, subtitle, title }) => {
	return (
		<Container>
			<Cover>
				<Image source={background} />
				<Title>{title}</Title>
			</Cover>
			<Content>
				<Logo source={logo} />
				<Wrapper>
					<Caption>{caption}</Caption>
					<Subtitle>{subtitle}</Subtitle>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default Card;

const Container = styled.View`
	width: 315px;
	height: 280px;
	border-radius: 14px;
	margin-left: 20px;
	margin-top: 20px;
	background-color: #fff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	color: #fff;
	font-size: 24px;
	font-weight: bold;
	margin-top: 5px;
	position: absolute;
	top: 20px;
	left: 20px;
	width: 170px;
`;

const Content = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	padding-left: 20px;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

const Wrapper = styled.View`
	width: 180px;
	margin-left: 20px;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
	text-transform: uppercase;
`;

const Subtitle = styled.Text`
	color: #b8b3ce;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	font-size: 12px;
	margin-top: 4px;
`;
