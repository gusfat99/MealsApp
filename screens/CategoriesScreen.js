import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {CATEGORIES} from '../data/data-dummy';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderList = itemData =>{
        return(
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect = {()=>{
                    props.navigation.navigate({
                        routeName : 'CategoryMeals',
                        params : {
                            idCat : itemData.item.id_kategori,
                            color : itemData.item.color
                        }
                    });
                }}
            />
        );
    }
    
    return(
        <View style={styles.screen}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item,i)=>item.id_kategori}
                renderItem={renderList}
                numColumns={2}
            />
        </View>
    );
};


const styles = StyleSheet.create({
});

CategoriesScreen.navigationOptions = (props) => {
    return {
        headerTitle : 'Meals Categories',
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="menu" iconName="ios-menu" size={26} onPress={
                    ()=>{
                        props.navigation.toggleDrawer();
                    }
                }/>
            </HeaderButtons>
        )
    }
};

export default CategoriesScreen;