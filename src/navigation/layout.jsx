import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HostPage from "../screens/HostPage";
import AudiencePage from "../screens/AudiencePage";
import HomePage from "../screens/HomePage";

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
    <Stack.Screen options={{headerShown: false}}  name="HomePage" component={HomePage} />
    <Stack.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
    <Stack.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
</Stack.Navigator>
  )
}

export default Layout