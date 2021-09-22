import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Icons = {
	HomeStack: "ios-home",
	CoursesStack: "ios-albums",
	ProjectsStack: "ios-folder",
};

const active = "#4775f2";
const inactive = "#b8b3c3";

const TabNavigator = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused }) => (
				<Ionicons
					name={Icons[route.name]}
					size={26}
					color={focused ? active : inactive}
				/>
			),
			headerShown: false,
			tabBarActiveTintColor: active,
			tabBarInactiveTintColor: inactive,
			presentation: "modal",
		})}
	>
		<Tab.Screen name='HomeStack' component={HomeScreen} />
		<Tab.Screen name='CoursesStack' component={CoursesScreen} />
		<Tab.Screen name='ProjectsStack' component={ProjectsScreen} />
	</Tab.Navigator>
);

export default TabNavigator;
