import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/data-dummy';
import DetailMealsItem from '../components/DetailMealsItem';
import { useSelector } from 'react-redux';


const CategoryMealsScreen = props => {
    const backgroundColor = props.navigation.getParam('color');
    const isFavorite = props.navigation.getParam('isFavorite');

    const renderMeals = itemIndex => {
        return(
            <DetailMealsItem
                title={itemIndex.item.title}
                backgroundColor={backgroundColor}
                duration = {itemIndex.item.duration}
                complexity ={itemIndex.item.complexity}
                affordability={itemIndex.item.affordability}
                imageUrl={itemIndex.item.imageUrl}
                onSelect = {
                    ()=>{
                        props.navigation.navigate({
                            routeName : 'DetailMeals',
                            params : {
                                MealsId : itemIndex.item.id,
                                MealsColor : backgroundColor,
                                mealTitle : itemIndex.item.title,
                                isFavorite : isFavorite
                            }
                        });
                    }
                }
            />
        );
    };

    const availableMeals = useSelector(state=>state.meals.filteredMeals);
    const idCategory = props.navigation.getParam('idCat');
    const categSelected = availableMeals.filter(meal => meal.categoryIds.indexOf(idCategory) >= 0);
    return(
            <FlatList
                data={categSelected}
                keyExtractor={(item,i)=>item.id}
                renderItem={renderMeals}
            />
  
    );
};

const styles = StyleSheet.create({
});

CategoryMealsScreen.navigationOptions = (navigateData) =>{
    const idCategory = navigateData.navigation.getParam('idCat');
    const categSelected = CATEGORIES.find(cat => cat.id_kategori === idCategory);
    return{
        headerTitle : categSelected.title
    };
};

export default CategoryMealsScreen;