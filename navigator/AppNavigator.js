import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AppNavigator = (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{ headerShown: false, presentation: "modal" }}
		>
			<Stack.Screen name='Home' component={TabNavigator} />
			<Stack.Screen name='Section' component={SectionScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigator;
