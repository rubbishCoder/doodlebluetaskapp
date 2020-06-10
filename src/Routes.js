import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Cart from './Cart';
import Menu from './Menu';

const Stack = createStackNavigator();

const Routes = () =>
    <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{
            title: 'My Cart', headerTransparent: true, headerTintColor: '#fff',
        }} />
    </Stack.Navigator>

export default Routes;