import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculadora from './src/pages/calculadora';
import DetailsScreen from './src/pages/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculadora">
        <Stack.Screen name="Calculadora" component={Calculadora} options={{ headerShown: false }} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} options={{title: 'Detalhes', headerStyle: { backgroundColor: 'black',}, headerTintColor: 'orange',}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};