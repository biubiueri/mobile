import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screen/Home';
import Welcome from './Screen/Welcome';
import Menu from './Screen/Menu';
import Login from './Screen/Login';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true, title: 'Login',headerStyle: {
      backgroundColor: '#95B7EB' 
    },headerTintColor: 'white', }}/>
        <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 


