import React, { useEffect, useCallback } from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import DefaultText from '../components/DefaultText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import {toggleFavorite} from '../store/actions/meals'; 



const DetailMealsScreen = props => {
    const {navigation} = props;
    const ListItem = props => {
        return(
            <View style={{backgroundColor : props.bgColor,...styles.listItem}} >
                <Text>{props.children}</Text>
            </View>
        )
    }

    const availableMeals = useSelector(state => state.meals.meals);

    const MealsId = navigation.getParam('MealsId');
    const MealsSelected = availableMeals.find(meal=>meal.id === MealsId);
    const MealsColor = navigation.getParam('MealsColor');
    const currentMealIsFavorite = useSelector(state =>{
            const fav = state.meals.favoriteMeals;
            return fav.some(meal=>meal.id === MealsId);
        }
      );
     



    const dispatch = useDispatch();
    const toggleFavHandler = useCallback(()=>{
        dispatch(toggleFavorite(MealsId));
    },[dispatch, MealsId]);

    useEffect(()=>{
        props.navigation.setParams({MealsFavorite : toggleFavHandler })
    },[toggleFavHandler]);

    useEffect(()=>{
        props.navigation.setParams({isFavorite : currentMealIsFavorite});
    },[currentMealIsFavorite]);

    return(
        <ScrollView>     
            <View style={styles.screen}>
                <Image style={styles.img} source={{uri : MealsSelected.imageUrl}}/>
                <View style={{backgroundColor : MealsColor, ...styles.detail}}>
                    <DefaultText style={styles.textDetail}>{MealsSelected.duration} Minutes</DefaultText>
                    <DefaultText style={styles.textDetail}>{MealsSelected.complexity}</DefaultText>
                    <DefaultText style={styles.textDetail}>{MealsSelected.affordability}</DefaultText>
                </View>
                <View style={styles.describe}>
                    <View style={styles.containerTitle}>
                        <DefaultText style={styles.title}>{MealsSelected.title}</DefaultText>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Ingredients</Text>
                        {MealsSelected.ingredients.map((ingredient,i)=>{
                            return (
                                <ListItem bgColor={MealsColor} key={i} >{ingredient}</ListItem>
                            )
                        })}
                        
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Steps</Text>
                        {MealsSelected.steps.map((step,i)=>{
                            return (
                                <ListItem key={i} >{step}</ListItem>
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

DetailMealsScreen.navigationOptions = navigateData => {
    // const MealsId = navigateData.navigation.getParam('MealsId');
    // const MealsSelected = MEALS.find(meal=>meal.id === MealsId);
    
    const headerTitle = navigateData.navigation.getParam('mealsTitle');
    const isFavorite =  navigateData.navigation.getParam('isFavorite');

    return{
        headerTitle : headerTitle,
        headerRight : (
        <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="fav" iconName={ isFavorite ?  'ios-star' : 'ios-star-outline'} color="white" onPress={navigateData.navigation.getParam('MealsFavorite')}/>
        </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
   screen : {
       flex : 1,
       backgroundColor : 'rgba(0,0,0,0.15)'
   },
   detail : {
       flexDirection : 'row',
       justifyContent : "space-around",
       padding: 5,
   },
   textDetail : {
       color : 'white',
       fontSize : 14,
       fontWeight : "bold",
       textShadowColor : 'black',
       textShadowOffset : {width : 0, height : 1},
       textShadowRadius : 2

   }, 
   img : {
       width : '100%',
       height : 200
   },
   describe : {
       paddingHorizontal : 20,
       marginVertical : 10,
   },
   containerTitle : {
       alignItems : 'center',
       backgroundColor : 'rgba(0,0,0,0.35)',
       padding : 10,
       marginBottom : 15
   },
   title : {
       fontSize : 18
   },
   subTitle : {
       fontWeight : 'bold',
       fontSize : 20,
       textAlign : 'center'
   },
   listItem : {
       borderWidth : 1,
       marginVertical : 6,
       padding : 8,
       borderRadius:  2,
   }
});

export default DetailMealsScreen;