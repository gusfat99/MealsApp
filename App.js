import React, {useState} from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as Font from  'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals : mealsReducer
});
const  store = createStore(rootReducer);

const fetchFonts = () => {

  mealsReducer

  return Font.loadAsync({
    'open-sans-condensed' : require('./assets/fonts/OpenSansCondensed-Light.ttf'),
    'open-sans-condensed-bold' : require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
    'open-sans-condensed-italic' : require('./assets/fonts/OpenSansCondensed-LightItalic.ttf'),
    'space-mono' : require('./assets/fonts/SpaceMono-Regular.ttf')
  });
  
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading
      startAsync = {fetchFonts}
      onFinish = {()=>setFontLoaded(true)}
    />
  }

  return(
    <Provider store={store} >
      <AppNavigator/>
    </Provider>
  );
}