import React,{useState, useCallback, useEffect} from 'react';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import {View, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { setFilterMeals } from '../store/actions/meals';

const SwitchFilter = props => {
    return(
        <View style={styles.switchContainer}>
            <DefaultText style={styles.label}>{props.label}</DefaultText>
            <Switch value={props.value}  onValueChange={props.setValue} trackColor={{true:Colors.accent}} thumbColor={Colors.accent} />
        </View>
    );
};


const FilterMealsScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan]             = useState(false);
    const [isVegetarian, setIsVegetarian]   = useState(false);

    const  dispatch = useDispatch();
    const saveFilter = useCallback(()=>{
        const filters = {
            GlutenFree : isGlutenFree,
            LactoseFree : isLactoseFree,
            Vegan : isVegan,
            Vegetarian : isVegetarian
        };
        dispatch(setFilterMeals(filters));
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian, dispatch]);

    useEffect(()=>{
        props.navigation.setParams({filterData : saveFilter})
    },[saveFilter]);
    
    return(
        <View style={styles.screen}>
            <DefaultText style={styles.title}>Available / Restrictions</DefaultText>
            <SwitchFilter label="Gluten-free" value={isGlutenFree} setValue={isGlutenFree=>setIsGlutenFree(isGlutenFree)} />
            <SwitchFilter label="Lactose-free" value={isLactoseFree} setValue={isLactoseFree=>setIsLactoseFree(isLactoseFree)} />
            <SwitchFilter label="Vegan" value={isVegan} setValue={isVegan=>setIsVegan(isVegan)} />
            <SwitchFilter label="Vegetarian" value={isVegetarian} setValue={isVegetarian=>setIsVegetarian(isVegetarian)} />
            
        </View>
    );
};

const styles = StyleSheet.create({
   screen : {
       flex : 1,
   },
   label : {
        fontSize : 18
   },
   title : {
       marginVertical : 5,
       textAlign : 'center',
       fontSize : 18
   },
   switchContainer : {
       marginVertical : 18,
       marginHorizontal : 25,
       flexDirection : 'row',
       justifyContent : 'space-between'
   }
});

FilterMealsScreen.navigationOptions  = props => {
    return {
        headerTitle : 'Filter Meals',
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="menu" iconName="ios-menu" onPress={()=>{
                    props.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerRight : (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="save" iconName="ios-save" onPress={props.navigation.getParam('filterData')} />
            </HeaderButtons>
        )
    }
}

export default FilterMealsScreen;