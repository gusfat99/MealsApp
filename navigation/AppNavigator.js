import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import DetailMealsScreen from '../screens/DetailMealsScreen';
import FavoritesMealScreen from '../screens/FavoritesMealScreen';
import FilterMealsScreen from '../screens/FilterMealsScreen';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';


const configDefaultNav = {
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : Colors.primary
    },
    headerTintColor : 'white',
    headerTitleStyle : {
      fontFamily: 'space-mono',
      fontWeight: 'bold',
    }
  }
}

const MealsNavigator = createStackNavigator({
  Categories : {
    screen : CategoriesScreen
  },
  CategoryMeals : {
    screen : CategoryMealsScreen
  },
  DetailMeals : DetailMealsScreen
}, configDefaultNav);

const FavNav = createStackNavigator({
  FavoritesMeals : {
    screen : FavoritesMealScreen,
    navigationOptions : {
      headerStyle : {
        backgroundColor : Colors.accent
      }
    }
  },
  DetailMeals : {
    screen : DetailMealsScreen,
    navigationOptions : {
      headerStyle : {
        backgroundColor : Colors.accent
      }
    }
  }
}, configDefaultNav);

const MealsBottomNavigator = createMaterialBottomTabNavigator({
  Meals : {
    screen : MealsNavigator,
    navigationOptions : {
      tabBarIcon : (info) => {
        return <Ionicons name='ios-restaurant'  size={22} color={info.tintColor} />
      },
      tabBarColor : Colors.primary
    }
  },
  Favorites : {
    screen : FavNav,
    navigationOptions : {
      tabBarIcon : (info) => {
        return <Ionicons name='ios-star'  size={22} color={info.tintColor} />
      },
      tabBarColor : Colors.accent
    }
  }
}, {
  initialRouteName : 'Meals',
  activeTintColor : 'white',
  shifting : true,

});

const FilterMeals = createStackNavigator({
  Filter : FilterMealsScreen
}, configDefaultNav);

const MainNavigator = createDrawerNavigator({
  Meals : {
    screen : MealsBottomNavigator
  },
  FilterMeals : {
    screen : FilterMeals,
    navigationOptions : {
      drawerLabel : 'Filter Meals'
    }
  } 
});

export default createAppContainer(MainNavigator);