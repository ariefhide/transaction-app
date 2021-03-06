import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import TransactionListScreen from '../screens/TransactionListScreen/index';
import TransactionDetailScreen from '../screens/TransactionDetailScreen/index';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TransactionListScreen}/>
        <Stack.Screen name="Detail" component={TransactionDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation;