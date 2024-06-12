import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home'
import Search from './screens/Search'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In" >
          <Stack.Screen name="Sign In" component={SignIn} options={{headerShown: false}}/>
          <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


