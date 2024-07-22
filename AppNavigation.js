import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'
import Appointment from './screens/Appointment'
import Info from './screens/Info'

export default function AppNavigation(){
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign In" >
                <Stack.Screen name="Sign In" component={SignIn} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Info" component={Info} />
                <Stack.Screen name='Appointment' component={Appointment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}