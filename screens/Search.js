import{StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DoctorData, Specialists1, Specialists2 } from '../constants';
import{widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'



export default function Search(){
    return(
        <SafeAreaView>
            
            <View style={Styles.searchContainer}>
                <MaterialCommunityIcons name="magnify" size={26} color="grey" style={{top: 4}}/>
                <TextInput
                    placeholder='Find a doctor/specialist'
                    style={{paddingVertical: 4, marginLeft: 10}}
                />
                <TouchableOpacity style={{left: 155}}>
                    <Ionicons name="filter" size={24} color="black" />
                </TouchableOpacity>
                
                
            </View>

            <View style={Styles.categoriesContainer}>
                <Text style={Styles.categoriesText}>Categories</Text>
            </View>
            <View style={Styles.specialistContainer}>
                {
                    Specialists1.map((specialist , index) =>{
                        return(
                            <TouchableOpacity key={index} style={Styles.specialistButton}>
                                <Text style={Styles.specialistText}>{specialist}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>

            <View style={Styles.specialistContainer}>
                {
                    Specialists2.map((specialist , index) =>{
                        return(
                            <TouchableOpacity key={index} style={Styles.specialistButton}>
                                <Text style={Styles.specialistText}>{specialist}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>

            <View style={Styles.popularBox}>
                <Text>Popular</Text>
                <ScrollView style={Styles.docBox}>

                    {
                        DoctorData.map((doc,index)=>{
                            return(
                                    <TouchableOpacity style={Styles.docBox} key={index}>
                                        <View style={Styles.docContainer}>
                                            <View style={{display:'flex',
                                                flexDirection: 'row'}}>
                                                <Image 
                                                    source={doc.image}
                                                    style={Styles.docImage}
                                                />
                                                <View style={Styles.docText}>
                                                    <Text style={Styles.docName}>{doc.name}</Text>
                                                    <Text style={Styles.docHospital}>{doc.hospital}</Text>
                                                    <Text style={Styles.docSpeciality}>{doc.speciality}</Text>
                                                </View>
                                                
                                            </View>
                                            
                                            <View style={Styles.ratingContainer}>
                                                <Image
                                                    source={require('../assets/star.png')}
                                                    style={Styles.starImage} 
                                                />
                                                <Text>{doc.rating}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>                            
                            )
                        })
                    }
                </ScrollView>

               
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    searchContainer:{
        display: 'flex',
        flexDirection: 'row',
        top: 70,
        right: 19,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        marginHorizontal: 30,
        paddingLeft: 4
    },
    categoriesContainer:{
        top: 90,
        left: 20
    },
    categoriesText:{
        fontSize: wp(4),
        fontWeight: '600',
        color: 'grey'
    },
    specialistContainer:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:wp('80%'),
        height: hp('5%'),
        top: 100,
        left: 4,
        alignItems: 'center',
        marginBottom: 8
    },
    popularBox:{
        top: 100,
        left: 10,
        height: hp(80)
    },
    docBox:{
        height: hp(17),
    },
    docContainer:{
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        marginRight: 12
    },
    docText:{
        width: wp(50),
        marginLeft: 20
    },
    specialistButton:{
        marginHorizontal: 2,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey',
        paddingVertical: 6,
        paddingHorizontal: 8,
        width: wp(28),
        marginRight: 18,
        alignItems: 'center'
    },
    specialistText:{
        fontWeight:'500'
    },
    docImage:{
        height:hp(7),
        width: wp(14),
        borderRadius: 10
    },
    docName:{
        fontWeight: 'bold'
    },
    ratingContainer:{
        top: 10,
        right: 30,
        position: 'absolute',
    },
    starImage:{
        height: hp(4),
        width: wp(7),
    }
})