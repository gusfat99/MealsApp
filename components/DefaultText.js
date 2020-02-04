import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const DefaultText = props => {
    return(
        <View>
            <Text style={{...props.style, ...styles.text}}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        fontFamily : 'open-sans-condensed-bold',
    }
});

export default DefaultText;