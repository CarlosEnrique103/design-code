import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { closeMenu } from "../features/menu/menuSlice";

const screenHeight = Dimensions.get("window").height;
const Menu = () => {
	const [topValue] = useState(new Animated.Value(screenHeight));
	const { action } = useSelector((state) => state.menu);
	const { name, email } = useSelector((state) => state.user.info);
	const dispatch = useDispatch();
	useEffect(() => {
		toggleMenu();
	}, []);

	useEffect(() => {
		toggleMenu();
	}, [action]);

	const toggleMenu = () => {
		if (action === "openMenu") {
			Animated.spring(topValue, {
				toValue: 50,
				useNativeDriver: false,
			}).start();
		}

		if (action === "closeMenu") {
			Animated.spring(topValue, {
				toValue: screenHeight,
				useNativeDriver: false,
			}).start();
		}
	};

	return (
		<AnimatedContainer style={{ top: topValue }}>
			<Cover>
				<Image source={require("../assets/background2.jpg")} />
				<Title>{name}</Title>
				<Subtitle>{email}</Subtitle>
			</Cover>
			<TouchableOpacity
				onPress={() => dispatch(closeMenu())}
				style={{
					position: "absolute",
					top: 120,
					left: "50%",
					marginLeft: -22,
					zIndex: 1,
				}}
			>
				<CloseButton>
					<Ionicons name='close' size={44} color='#546bfb' />
				</CloseButton>
			</TouchableOpacity>
			<Content>
				{items.map(({ icon, title, text }, index) => (
					<MenuItem key={index} icon={icon} title={title} text={text} />
				))}
			</Content>
		</AnimatedContainer>
	);
};

export default Menu;

const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
	border-radius: 10px;
	overflow: hidden;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	align-items: center;
	justify-content: center;
`;

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Content = styled.View`
	height: ${screenHeight}px;
	background: #f0f3f5;
	padding: 50px;
`;

const CloseButton = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: #fff;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 8px;
`;
const items = [
	{
		icon: "ios-settings",
		title: "Account",
		text: "settings",
	},
	{
		icon: "ios-card",
		title: "Billing",
		text: "payments",
	},
	{
		icon: "ios-compass",
		title: "Learn React",
		text: "start course",
	},
	{
		icon: "ios-exit",
		title: "Log out",
		text: "see you soon!",
	},
];
