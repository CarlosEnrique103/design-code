import React from "react";
import styled from "styled-components";

const Course = ({ title, subtitle, image, logo, author, avatar, caption }) => {
	return (
		<Container>
			<Cover>
				<Image source={image} />
				<Logo source={logo} resizeMode='contain' />
				<Subtitle>{subtitle}</Subtitle>
				<Title>{title}</Title>
			</Cover>
			<Content>
				<Avatar source={avatar} />
				<Wrapper>
					<Caption>{caption}</Caption>
					<Author>Taught By {author}</Author>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default Course;

const Container = styled.View`
	width: 335px;
	height: 335px;
	border-radius: 14px;
	margin-left: 20px;
	margin-top: 20px;
	background-color: #fff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
	width: 100%;
	height: 260px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
	justify-content: flex-end;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Logo = styled.Image`
	width: 48px;
	height: 48px;
	position: absolute;
	top: 20px;
	left: 50%;
	margin-left: -24px;
`;

const Title = styled.Text`
	color: #fff;
	width: 170px;
	font-size: 24px;
	font-weight: 600;
	margin-top: 4px;
	margin-bottom: 20px;
	margin-left: 20px;
`;

const Subtitle = styled.Text`
	color: rgba(255, 255, 255, 0.8);
	font-weight: 500;
	font-size: 15px;
	text-transform: uppercase;
	margin-left: 20px;
`;

const Content = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
`;

const Wrapper = styled.View`
	flex: 1;
	margin-left: 10px;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
`;

const Author = styled.Text`
	color: #b8b3ce;
	font-weight: 600;
	font-size: 13px;
	text-transform: uppercase;
	font-size: 12px;
	margin-top: 4px;
`;
