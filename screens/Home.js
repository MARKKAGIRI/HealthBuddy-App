import{StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native'
import{widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Entypo , Octicons, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';


export default function Home({navigation}){
    return(
        <SafeAreaView>
            <View style={styles.homeBox}>
                {/*this is the header bar*/}
                <View style={styles.headerBox}>
                    <View style={styles.profileBox}>
                        <Text style={styles.greetText}>Good Morning</Text>
                        <Text>John Doe</Text>
                    </View>
                    <View style={styles.headerIcons}>
                        <Entypo name="chat" size={24} color="black" />
                        <Octicons name="bell" size={24} color="black" />
                    </View>
                </View>

                {/*this is the search bar*/}
                <View>
                    <MaterialCommunityIcons name="magnify" size={24} color="black" style={styles.magnifyIcon} />
                    <TextInput
                        placeholder='Doctors,Hospitals,Diseases,Symptoms...'
                        style={styles.healthInput}
                    />
                </View>

                {/** here we are listing the functions of the app buttons */}
                <View style={styles.functionBox}>

                    <View>
                        <TouchableOpacity style={styles.appointmentBox}
                        onPress={() => navigation.navigate('Appointment')}>
                            <Entypo name="calendar" size={36} color="black" style={styles.calendarIcon} />
                            <View>
                                <Text style={styles.appointmentText}>Book an appointment</Text>
                                <Text style={styles.appointmentSubText}>Find a doctor or specialist</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.pharmacyBox} onPress={() => navigation.navigate('Info')}>
                            <MaterialCommunityIcons name="home-modern" size={36} color="black" style={styles.messageIcon} />
                            <View>
                                <Text style={styles.appointmentText}>Find a pharmacy</Text>
                                <Text style={styles.appointmentSubText}>Purchase Medicines</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity style={styles.consultationBox}>
                            <Entypo name="message" size={34} color="black" style={styles.messageIcon} />
                            <View>
                                <Text style={styles.appointmentText}>Request Consultation</Text>
                                <Text style={styles.appointmentSubText}>Talk to a specialist</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.hospitalBox}>
                            <MaterialCommunityIcons name="hospital-building" size={36} color="black" style={styles.messageIcon} />
                            <View>
                                <Text style={styles.appointmentText}>Find a Hospital</Text>
                                <Text style={styles.appointmentSubText}>visit your nearest hospital</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/**this is where there is a article preview */}
                <TouchableOpacity style={styles.articleBox}>
                    <View style={styles.articleTextBox}>
                        <Text style={styles.articleText}>FACT OF THE DAY</Text>
                        <Image
                            source={require('../assets/pills2.jpg')}
                            style={styles.articlePic} 
                        />
                        <View style={styles.articleDescriptionBox}>
                            <Text style={styles.descriptionText}>
                                Medical prescriptions have revolutionized the medicine industry 
                                by providing structured guidelines for the administration of medications. 
                                They ensure proper dosage, frequency, and duration of treatment, 
                                enhancing patient safety and efficacy of therapies.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/**link to the article */}
                <TouchableOpacity style={styles.learnBox} onPress={() => navigation.navigate('Info')}>
                    <Text style={{fontSize: wp(4), textDecorationLine:'underline', 
                color: 'blue'}}>Learn More</Text>
                    <AntDesign name="arrowright" size={22} color="black" />
                </TouchableOpacity>

                {/**here are the bottom icons  */}
                <View style={styles.iconNavigation}>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                        <Text>Home</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <FontAwesome5 name="clipboard-list" size={24} color="black" />
                        <Text>Appointment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('Search')}>
                        <MaterialCommunityIcons name="magnify" size={24} color="black"/>
                        <Text>search</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('Profile')}>
                        <AntDesign name="user" size={24} color="black" />
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
       
    )

}

const styles = StyleSheet.create({
    greetText:{
        fontSize: wp(5),
        fontWeight: '600'
    },
    magnifyIcon:{
        left: 30,
        top: 92,
    },
    homeBox:{
        backgroundColor: 'white',
        height: hp('105%')
    },
    profileBox:{
        top: 45,
        left: 10,
    },
    headerBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerIcons:{
        display:'flex',
        flexDirection:'row',
        top: 45,
        justifyContent: 'space-between',
        width: wp(19),
        marginRight:10,
    },
    healthInput:{
        top: 60,
        borderWidth:1,
        borderColor: 'grey',
        borderRadius: 10,
        paddingTop: 4,
        paddingLeft: 45,
        marginHorizontal: 10
    },
    functionBox:{
        display: 'flex',
        flexDirection:'row',
        height: hp('45%'),
        top: 80,
        marginHorizontal: 10,
        justifyContent:'space-between'
    },
    appointmentBox:{
        flex: 1,
        borderWidth: 1,
        height: hp('16%'),
        width: wp('42%'),
        backgroundColor: '#F9F5FF',
        borderRadius: 10,
        borderColor:'#CBA9FF'
    },
    calendarIcon:{
        marginLeft: 12,
        top: 12
    },
    appointmentText:{
        fontSize: wp(5),
        top: 27,
        fontWeight: '600',
        marginLeft: 12,
        letterSpacing: 2,
        height: hp(8),
        lineHeight: 28
    },
    appointmentSubText:{
        top: 29,
        fontSize: wp(3),
        marginLeft: 12,
        color: 'grey'
    },
    pharmacyBox:{
        flex: 1,
        borderWidth:1,
        height: hp('16%'),
        width: wp('42%'),
        marginTop: 16,
        backgroundColor:'#F9DBAF',
        borderRadius: 10,
        borderColor: '#c7af8c'
    },
    consultationBox:{
        flex: 1,
        borderWidth:1,
        height: hp('16%'),
        width: wp('42%'),
        backgroundColor: '#FEF6EE',
        borderRadius: 10,
        borderColor: '#F9DBAF'
    },
    messageIcon:{
        marginLeft: 12,
        top: 12
    },
    hospitalBox:{
        flex: 1,
        borderWidth:1,
        height: hp('16%'),
        width: wp('42%'),
        marginTop: 16,
        backgroundColor:'#AAF0C4',
        borderRadius: 10,
        borderColor:'#88c09c'
    },
    articleBox:{
        top: 90,
        height: hp('26%'),
        marginHorizontal: 10
    },
    articleTextBox:{
        marginLeft: 10
    },
    articleText:{
        fontWeight: 'bold',
        fontSize: wp(4),
        color: '#696969'
    },
    articlePic:{
        height: hp('23%'),
        width: wp('95%'),
        position:'relative',
        borderRadius: 10,
        top: 10,
        right: 10,
    },
    articleDescriptionBox:{
        top: -140,
        color:'white'
    },
    descriptionText:{
        color:'white',
        fontSize: wp(4),
        letterSpacing: 2
    },
    learnBox:{
        position:'relative', 
        top: 94, 
        left: 280,
        display: 'flex',
        flexDirection:'row'
    },
    iconNavigation:{
        top: 95,
        height: hp(5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
    }
    
})