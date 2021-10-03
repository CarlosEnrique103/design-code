import React, { useEffect } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import * as Device from "expo-device";
//import { getDeviceId } from "react-native-device-info";

const SectionScreen = ({ route, navigation }) => {
	const { card } = route.params;
	const { osName } = Device;
	const styleStatusBar = {
		Android: {
			show: "dark-content",
			hidden: "light-content",
		},
		iOS: {
			show: "light-content",
			hidden: "dark-content",
		},
	};

	const deviceStatusBar = styleStatusBar[osName];

	useEffect(() => {
		StatusBar.setBarStyle(deviceStatusBar.show, true);
		return () => {
			StatusBar.setBarStyle(deviceStatusBar.hidden, true);
		};
	}, []);

	return (
		<Container>
			<StatusBar hidden />
			<Cover>
				<Image source={card.image} />
				<Title>{card.title}</Title>
				<Caption>{card.caption}</Caption>
			</Cover>
			<Wrapper>
				<Logo source={card.logo} />
				<Subtitle>{card.subtitle}</Subtitle>
			</Wrapper>
			<TouchableOpacity
				style={{ position: "absolute", top: 20, right: 20 }}
				onPress={() => navigation.goBack()}
			>
				<CloseView>
					<Ionicons
						name='ios-close'
						size={30}
						color='#4775f2'
						style={{ margin: -1.5 }}
					/>
				</CloseView>
			</TouchableOpacity>
		</Container>
	);
};

export default SectionScreen;

const Container = styled.View`
	flex: 1;
`;

const Cover = styled.View`
	height: 375px;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Title = styled.Text`
	font-size: 24px;
	color: #fff;
	font-weight: bold;
	width: 170px;
	position: absolute;
	top: 80px;
	left: 20px;
`;

const Caption = styled.Text`
	color: #fff;
	font-size: 17px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	width: 300px;
`;

const CloseView = styled.View`
	height: 28px;
	width: 28px;
	background-color: #fff;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
	border-radius: 14px;
`;

const Wrapper = styled.View`
	flex-direction: row;
	align-items: center;
	position: absolute;
	top: 30px;
	left: 20px;
`;

const Logo = styled.Image`
	width: 24px;
	height: 24px;
`;

const Subtitle = styled.Text`
	font-weight: 600;
	font-size: 18px;
	margin-left: 5px;
	color: #fff;
	text-transform: uppercase;
`;
