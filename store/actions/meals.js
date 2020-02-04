export const TOGGLE_FAVORITE = "TOGGLE FAVORITE";
export const SET_FILTER = "SET FILTERS";

export const toggleFavorite = (id) => {
    return {
        type : TOGGLE_FAVORITE,
        mealsId : id
    }
};

export const setFilterMeals = settingFilter => {
    return {
        type : SET_FILTER,
        filters : settingFilter
    }
};