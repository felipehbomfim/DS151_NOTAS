import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './templates/HomeScreen';
import Galeria from './templates/Galeria';
import ColorList from './templates/ColorList';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Galeria" component={Galeria} />
                <Stack.Screen name="ColorList" component={ColorList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;