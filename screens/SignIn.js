import { StyleSheet, Text, View , SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import{widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Fontisto, MaterialIcons, FontAwesome5, Ionicons} from '@expo/vector-icons';

export default function SignIn({navigation}){
    return(
        <SafeAreaView>
            <View style={styles.background}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>HE</Text>
                </View>

                <View style={styles.headerTextBox}>
                    <Text style={styles.headerText}>HealthBuddy</Text>
                </View>

                <View style={styles.signBox}>
                    <Text style={styles.signText}>Sign In</Text>

                    <View style={styles.emailBox}>
                        <Text style={styles.emailText}>Email</Text>
                        <Fontisto name="email" size={24} color="black" style={styles.emailIcon} />
                        <TextInput
                            placeholder='danielsanchez@gmail.com'
                            style={styles.emailInput} 
                        />
                    </View>

                    <View style={styles.passwordBox}>
                        <Text style={styles.emailText}>Password</Text>
                        <MaterialIcons name="key" size={28} color="black" style={styles.KeyImage} />
                        <TextInput
                            style={styles.passwordInput}
                        />
                    </View>

                    <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.logText}>or Log In with:</Text>
                    </View>

                    <View style={styles.logIcons}>
                        <TouchableOpacity>
                            <Fontisto name="google" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5 name="facebook" size={32} color="blue" style={styles.faceBookIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="logo-twitter" size={23} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signUpBox}>
                        <Text>Dont have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                            <Text style={{color:'#00CBFE', textDecorationLine:'underline'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    circleText:{
        fontSize: wp(7),
        color: 'white',
        fontWeight: '600',
        letterSpacing: 2
    },
    headerText:{
        fontSize: wp(6),
        letterSpacing: 2,
        fontWeight:'700',
        color:'white',
    },
    signText:{
        alignSelf:'center',
        top: 30,
        fontSize: hp(3),
        fontWeight:'400',
    },
    emailText:{
        top: 50,
        left: 20,
        fontSize: hp(2)
    },
    buttonText:{
        color:'white',
        fontSize: wp(4)
    },
    logText:{
        alignSelf:'center',
        top: 140
    },
    emailIcon:{
        top: 80,
        right: 15
    },
    faceBookIcon:{
        marginHorizontal: 30,
    },
    KeyImage:{
        position: 'absolute',
        height: hp(5),
        width: wp(10),
        left: 22,
        top: 86,
    },
    background:{
        backgroundColor:'#87CEEB',
        height: hp('105%'),
    },
    headerTextBox:{
        alignSelf: 'center',
        position:'absolute',
        padding: 10,
        top: 140,
    },
    signBox:{
        top: 200,
        backgroundColor: 'white',
        marginHorizontal: 20,
        height: hp('60%'),
        borderRadius: 18,
        position:'relative',
    },
    circle:{
        borderWidth: 4,
        borderColor: 'white',
        height: hp(8),
        width: wp(17),
        borderRadius: 40,
        alignItems: 'center',
        top: 70,
        alignSelf:'center',
        justifyContent: 'center',
        position:'absolute'
    },
    emailInput:{
        top: 77,
        right: 17,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        flex: 1,
    },
    passwordInput:{
        top: 88,
        right: 30,
        flex: 1,
        marginHorizontal: 20,
        borderBottomWidth: 1,
    },
    passwordBox:{
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
    },
    emailBox:{
        display: 'flex',
        flexDirection: 'row',
    },
    logButton:{
        alignSelf: 'center',
        top: 130,
        backgroundColor:'#00BDFE',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 12,
    },
    logIcons:{
        alignSelf: 'center',
        top: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        position: 'relative',
        padding: 10
    },
    signUpBox:{
        alignSelf: 'center',
        top: 160,
        display: 'flex',
        flexDirection: 'row'
    }
})