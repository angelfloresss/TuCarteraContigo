import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import CardScreen from './CardScreen';
import RecipesScreen from './RecipesListScreen';
import RecipeDetailScreen from './RecipeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login" screenOptions={{
      headerTintColor: '#fff',
    }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{  headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio', headerLeft: null }} />
        <Stack.Screen name="Card" component={CardScreen} options={{ title: 'Detalle de tarjeta' }} />
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{ title: 'Recibos' }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Detalle de recibo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}