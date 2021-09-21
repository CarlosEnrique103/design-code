import React, { useEffect, useState } from "react";
import {
	Animated,
	Easing,
	SafeAreaView,
	ScrollView,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import profile from "../assets/avatar.jpg";
import Card from "../components/Card";
import Logo from "../components/Logo";
import { NotificationIcon } from "../components/Icons";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { openMenu } from "../features/menu/menuSlice";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const [scaleValue] = useState(new Animated.Value(1));
	const [opacityValue] = useState(new Animated.Value(1));
	const { action } = useSelector((state) => state.menu);

	useEffect(() => {
		toggleMenu();
		StatusBar.setBarStyle("dark-content", true);
	}, []);

	useEffect(() => {
		toggleMenu();
	}, [action]);

	const toggleMenu = () => {
		if (action === "openMenu") {
			Animated.timing(scaleValue, {
				toValue: 0.9,
				duration: 300,
				easing: Easing.in(),
				useNativeDriver: false,
			}).start();

			Animated.spring(opacityValue, {
				toValue: 0.5,
				useNativeDriver: false,
			}).start();
			StatusBar.setBarStyle("light-content", true);
		}

		if (action === "closeMenu") {
			Animated.timing(scaleValue, {
				toValue: 1,
				duration: 300,
				easing: Easing.in(),
				useNativeDriver: false,
			}).start();

			Animated.spring(opacityValue, {
				toValue: 1,
				useNativeDriver: false,
			}).start();
		}
	};

	return (
		<RootView>
			<Menu />
			<AnimatedContainer
				style={{ transform: [{ scale: scaleValue }], opacity: opacityValue }}
			>
				<SafeAreaView>
					<ScrollView style={{ height: "100%" }}>
						<TitleBar>
							<TouchableOpacity onPress={() => dispatch(openMenu())}>
								<Avatar source={profile} />
							</TouchableOpacity>
							<Profile>
								<Title>Welcome back</Title>
								<Name>Juan Carlos</Name>
								<NotificationIcon
									style={{ position: "absolute", right: 20, top: 5 }}
								/>
							</Profile>
						</TitleBar>
						<ScrollView
							style={{
								paddingVertical: 30,
								paddingHorizontal: 20,
							}}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							{logos.map(({ image, text }, index) => (
								<Logo key={index} image={image} text={text} />
							))}
						</ScrollView>
						<Subtitle>Continue Learning</Subtitle>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							style={{ paddingBottom: 20 }}
						>
							{cards.map(({ title, image, subtitle, caption, logo }, index) => (
								<Card
									key={index}
									background={image}
									caption={caption}
									logo={logo}
									subtitle={subtitle}
									title={title}
								/>
							))}
						</ScrollView>
						<Subtitle>Popular Courses</Subtitle>

						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							style={{ paddingBottom: 20 }}
						>
							{courses.map(
								(
									{ title, subtitle, image, logo, author, avatar, caption },
									index
								) => (
									<Course
										key={index}
										title={title}
										subtitle={subtitle}
										image={image}
										logo={logo}
										author={author}
										avatar={avatar}
										caption={caption}
									/>
								)
							)}
						</ScrollView>
					</ScrollView>
				</SafeAreaView>
			</AnimatedContainer>
		</RootView>
	);
};

export default HomeScreen;

const RootView = styled.View`
	flex: 1;
	background-color: black;
`;

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
	border-radius: 10px;
	overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Profile = styled.View`
	margin-left: 10px;
	position: relative;
	flex: 1;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 10px;
	text-transform: uppercase;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const TitleBar = styled.View`
	flex: 1;
	margin-top: 50px;
	margin-left: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const logos = [
	{
		image: require("../assets/logo-framerx.png"),
		text: "Framer X",
	},
	{
		image: require("../assets/logo-figma.png"),
		text: "Figma",
	},
	{
		image: require("../assets/logo-invision.png"),
		text: "Invision",
	},
	{
		image: require("../assets/logo-react.png"),
		text: "React",
	},
	{
		image: require("../assets/logo-sketch.png"),
		text: "Sketch",
	},
	{
		image: require("../assets/logo-studio.png"),
		text: "Studio",
	},
	{
		image: require("../assets/logo-swift.png"),
		text: "Swift",
	},
	{
		image: require("../assets/logo-vue.png"),
		text: "Vuew",
	},
	,
	{
		image: require("../assets/logo-xcode.png"),
		text: "Xcode",
	},
	{
		image: require("../assets/logo-xd.png"),
		text: "XD",
	},
	{
		image: require("../assets/splash.png"),
		text: "Splash",
	},
];

const cards = [
	{
		title: "React Native for Designers",
		image: require("../assets/background11.jpg"),
		subtitle: "React Native",
		caption: "1 of 12 sections",
		logo: require("../assets/logo-react.png"),
	},
	{
		title: "Styled Components",
		image: require("../assets/background12.jpg"),
		subtitle: "React Native",
		caption: "2 of 12 sections",
		logo: require("../assets/logo-react.png"),
	},
	{
		title: "Props and Icons",
		image: require("../assets/background13.jpg"),
		subtitle: "React Native",
		caption: "3 of 12 sections",
		logo: require("../assets/logo-react.png"),
	},
	{
		title: "Static Data and Loop",
		image: require("../assets/background14.jpg"),
		subtitle: "React Native",
		caption: "4 of 12 sections",
		logo: require("../assets/logo-react.png"),
	},
];

const courses = [
	{
		title: "Prototype in InVision Studio",
		subtitle: "10 sections",
		image: require("../assets/background13.jpg"),
		logo: require("../assets/logo-studio.png"),
		author: "Meng To",
		avatar: require("../assets/avatar.jpg"),
		caption: "Design and interactive prototype",
	},
	{
		title: "React for Designers",
		subtitle: "12 sections",
		image: require("../assets/background11.jpg"),
		logo: require("../assets/logo-react.png"),
		author: "Meng To",
		avatar: require("../assets/avatar.jpg"),
		caption: "Learn to design and code a React site",
	},
	{
		title: "Design and Code with Framer X",
		subtitle: "10 sections",
		image: require("../assets/background14.jpg"),
		logo: require("../assets/logo-framerx.png"),
		author: "Meng To",
		avatar: require("../assets/avatar.jpg"),
		caption: "Create powerful design and code components for your app",
	},
	{
		title: "Design System in Figma",
		subtitle: "10 sections",
		image: require("../assets/background6.jpg"),
		logo: require("../assets/logo-figma.png"),
		author: "Meng To",
		avatar: require("../assets/avatar.jpg"),
		caption:
			"Complete guide to designing a site using a collaborative design tool",
	},
];
