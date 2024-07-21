import{StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DoctorData, Specialists1, Specialists2 } from '../constants';
import{widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'



export default function Search(){
    return(
        <SafeAreaView>
            
            <View style={styles.searchContainer}>
                <MaterialCommunityIcons name="magnify" size={26} color="grey" style={{top: 4}}/>
                <TextInput
                    placeholder='Find a doctor/specialist'
                    style={{paddingVertical: 4, marginLeft: 10}}
                />
                <TouchableOpacity style={{left: 155}}>
                    <Ionicons name="filter" size={24} color="black" />
                </TouchableOpacity>
                
                
            </View>

            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesText}>Categories</Text>
            </View>
            <View style={styles.specialistContainer}>
                {
                    Specialists1.map((specialist , index) =>{
                        return(
                            <TouchableOpacity key={index} style={styles.specialistButton}>
                                <Text style={styles.specialistText}>{specialist}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>

            <View style={styles.specialistContainer}>
                {
                    Specialists2.map((specialist , index) =>{
                        return(
                            <TouchableOpacity key={index} style={styles.specialistButton}>
                                <Text style={styles.specialistText}>{specialist}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>

            <View style={styles.popularBox}>
                <Text>Popular</Text>
                <ScrollView style={styles.docBox}>

                    {
                        DoctorData.map((doc,index)=>{
                            return(
                                    <TouchableOpacity style={styles.docBox} key={index}>
                                        <View style={styles.docContainer}>
                                            <View style={{display:'flex',
                                                flexDirection: 'row'}}>
                                                <Image 
                                                    source={doc.image}
                                                    style={styles.docImage}
                                                />
                                                <View style={styles.docText}>
                                                    <Text style={styles.docName}>{doc.name}</Text>
                                                    <Text style={styles.docHospital}>{doc.hospital}</Text>
                                                    <Text style={styles.docSpeciality}>{doc.speciality}</Text>
                                                </View>
                                                
                                            </View>
                                            
                                            <View style={styles.ratingContainer}>
                                                <Image
                                                    source={require('../assets/star.png')}
                                                    style={styles.starImage} 
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

const styles = StyleSheet.create({
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
        height: hp(15),
    },
    docContainer:{
        display:'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
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
        left: 350,
        position: 'absolute'
    },
    starImage:{
        height: hp(4),
        width: wp(7),
    }
})