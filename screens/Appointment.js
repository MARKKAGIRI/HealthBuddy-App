import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity,
    TextInput
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import{widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Appointment(navigation){
    return(
        <SafeAreaView>
            {/**header container for going back */}
            <TouchableOpacity style={styles.headerContainer} 
            onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={styles.headerText} >Book an appointment</Text>
            </TouchableOpacity>

            {/**steps for booking a doctor */}
            <View style={styles.stepsContainer} >
                <TouchableOpacity style={styles.circleStep}>
                    <Text style={styles.circleText}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleStep}>
                    <Text style={styles.circleText}>
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleStep}>
                    <Text style={styles.circleText}>
                        3
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleStep}>
                    <Text style={styles.circleText}>
                        4
                    </Text>
                </TouchableOpacity>
            </View>

            {/** search bar for the doctor */}
            <View style={styles.docLabel}>
                <Text style={styles.docText}>Select a doctor</Text>
            </View>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={18} color="grey" style={styles.searchIcon}/>
                <TextInput
                placeholder='search for a doctor'
                style={styles.searchBar}/>
            </View>
            <TouchableOpacity>
                <Ionicons name="filter" size={22} color="grey" style={styles.filterIcon} />
            </TouchableOpacity>            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    headerText:{
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    },
    headerContainer: {
        top: 40,
        left: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    circleStep:{
        top: 70,
        left: 6,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        height: hp(6),
        width: wp(12),
        position: "relative"
    },
    circleText:{
        fontSize: hp(3),
        color: "grey"
    },
    stepsContainer:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    docLabel:{
        top: 94,
        left: 10,
        alignItems: "flex-start", 
    },
    docText:{
        fontSize: hp(2),
        fontWeight: "700",
        color: "grey"
    },
    searchContainer:{
        top: 100,
        left: 0,
        display: "flex",
        flexDirection: "row",
    },
    searchIcon:{
        top: 10,
        left: 32
    },
    searchBar:{
        borderWidth: 1,
        borderColor: "grey",
        width: wp(70),
        paddingTop: 4,
        paddingLeft: 52,
        fontSize: hp(2),
        color: "grey",
        borderRadius: 4
    },
    filterIcon:{
        right: -320,
        top: 70,
        backgroundColor: "#D3D3D3",
        padding: 4,
        borderRadius: 4,
        width: wp(8),
    }
})