import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'

export default function AppNavigation(){
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign In" >
                <Stack.Screen name="Sign In" component={SignIn} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}