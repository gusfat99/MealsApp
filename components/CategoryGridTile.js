import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const CategoryGridTile = props => {
    return(
        <TouchableOpacity style={{backgroundColor : props.color, ...styles.grid}} onPress={props.onSelect}>
            <Ionicons color="#fff8" name="ios-star" size={110} />
            <View style={styles.gridItem}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    grid : {
        flex : 1,
        width : '100%',
        height : 160,
        borderBottomColor : Colors.primary,
        borderBottomWidth : 2,
        borderTopEndRadius : 10,
        elevation : 6,
        margin : 5,
        padding : 10,
    },
    gridItem : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems: 'flex-end',
    },
    title : { 
        fontSize : 18,
        fontWeight: 'bold',
        color : 'white',
        textShadowColor : '#000',
        textShadowRadius : 6,
        textShadowOffset : {width : 0, height : 2}
    }
});

export default CategoryGridTile;