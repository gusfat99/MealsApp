import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import DefaultText from './DefaultText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const DetailMealsItem = props => {
    return(
        <View style={{backgroundColor : props.backgroundColor, ...styles.container}}>
            <TouchableOpacity  onPress={props.onSelect}>
                <View>
                    <ImageBackground source={{uri : props.imageUrl}} style={styles.image}>
                        <DefaultText style={styles.title}>{props.title}</DefaultText>
                    </ImageBackground>
                    <View style= {styles.detail}>
                        <DefaultText>{props.duration} Minutes</DefaultText>
                        <DefaultText>{props.complexity}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        marginVertical: 5,
        marginHorizontal : 5,
        borderRadius: 5,
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        backgroundColor : 'rgba(0,0,0,0.34)',
        padding : 10,
        fontSize : 18,
        color : 'white'
    },
    detail : {
        padding : 5,
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    image : {
        justifyContent : 'flex-end',
        height : 200,
        width : '100%',
        overflow : 'hidden',
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5
    }
});
export default DetailMealsItem;