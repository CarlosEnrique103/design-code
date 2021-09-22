import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import AppNavigator from "./navigator/AppNavigator";

const App = () => {
	return <Provider store={store}>{AppNavigator}</Provider>;
};

export default App;
