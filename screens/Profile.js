import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated,{useSharedValue , useAnimatedStyle} from 'react-native-reanimated'

const SIZE= 100

export default function Profile() {
    const change = useSharedValue(0)

    const reanimatedStyle = useAnimatedStyle(() => {
        return{
            opacity: change.value
        }
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View style={{height: SIZE ,width: SIZE}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})


