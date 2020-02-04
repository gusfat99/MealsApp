import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { MEALS } from '../data/data-dummy';
import DetailMealsItem from '../components/DetailMealsItem';
import { useSelector } from 'react-redux';

const renderListFav = (props,listData) => {
    return(
        <DetailMealsItem 
            title={listData.item.title}
                backgroundColor="white"
                duration = {listData.item.duration}
                complexity ={listData.item.complexity}
                affordability={listData.item.affordability}
                imageUrl={listData.item.imageUrl}
                onSelect = {
                    ()=>{
                        props.navigation.navigate({
                            routeName : 'DetailMeals',
                            params : {
                                MealsId : listData.item.id
                               
                            }
                        });
                    }
                }
        />
    );
};

const FavoritesMealScreen = props => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);
    const mealsChange = availableMeals;
    
    return(
        <FlatList
            data = {mealsChange}
            keyExtractor = {(dataItem,i)=>dataItem.id}
            renderItem = {renderListFav.bind(this,props)}
        />
    );
};

FavoritesMealScreen.navigationOptions =  {
    
    headerTitle : 'Favorites Meals'
    
};

const styles = StyleSheet.create({
   screen : {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'center'
   }
});

export default FavoritesMealScreen;