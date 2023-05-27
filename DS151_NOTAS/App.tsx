import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './templates/HomeScreen';
import Galeria from './templates/Galeria';
import ColorList from './templates/ColorList';
import Autenticado from './templates/Autenticado';
import CalculoMedias from './templates/CalculoMedias';
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Galeria" component={Galeria} />
                <Stack.Screen name="ColorList" component={ColorList} />
                <Stack.Screen name="Autenticado" component={Autenticado} />
                <Stack.Screen name="Calculo de Médias" component={CalculoMedias} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;