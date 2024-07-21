import {View, StyleSheet,Text } from "react-native";
import{widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
export default function Info(){
    return(
        <View style={styles.background}>
            <Text style={styles.text}>
            In recent years, advancements in medicine have been remarkable, driven by innovations in technology, research, and biotechnology. Breakthroughs in genomics and personalized medicine are enabling tailored treatments based on individual genetic profiles, improving efficacy and reducing side effects. The development of advanced imaging techniques and minimally invasive surgical procedures has significantly enhanced diagnostic accuracy and patient outcomes. Additionally, the rise of artificial intelligence and machine learning in healthcare is transforming disease prediction, diagnosis, and treatment planning. Immunotherapy and regenerative medicine, including stem cell therapy, are opening new frontiers in treating previously untreatable conditions. Together, these advancements are revolutionizing patient care and offering new hope for better health outcomes.
            </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    background:{
        color: 'grey'
    },
    text:{
        fontSize: wp(12)
    }
})
