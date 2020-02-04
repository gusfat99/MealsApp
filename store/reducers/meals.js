import {MEALS} from '../../data/data-dummy';

const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favoriteMeals : []
};

const mealsReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case  'TOGGLE FAVORITE' : 
            const exitingIndex = state.favoriteMeals.findIndex(meals=>meals.id === action.mealsId);
            if(exitingIndex >= 0) {
                const updateFavMeals = [...state.favoriteMeals];
                updateFavMeals.splice(exitingIndex,1);
                console.warn('unFav');
                return {
                    ...state,
                    favoriteMeals : updateFavMeals
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealsId);
                return {
                    ...state,
                    favoriteMeals : state.favoriteMeals.concat(meal)
                }
            }

        case 'SET FILTERS' :
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if(appliedFilters.GlutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if(appliedFilters.LactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if(appliedFilters.Vegan && !meal.isVegan) {
                    return false;
                }
                if(appliedFilters.Vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return {
                ...state,
                filteredMeals
            }

        default : return state
    }
};

export default mealsReducer;