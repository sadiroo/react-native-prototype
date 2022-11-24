import { useState } from 'react';
import { View } from 'react-native';
import OptionsPage from './src/pages/OptionsPage';
import TimerPage from './src/pages/TimerPage';
import WelcomePage from './src/pages/WelcomePage';

export default function App() {
  const[currentPage, setCurrentPage] = useState('welcome');

  return (
    <View style={{flex:1}}>
      {currentPage==='welcome' && 
      <WelcomePage onChangePage={(arg) => {setCurrentPage(arg);}} />}
      {currentPage==='timer' && 
      <TimerPage onChangePage={(arg) => {setCurrentPage(arg)}} />}
      {currentPage==='options' && 
      <OptionsPage onChangePage={(arg) => {setCurrentPage(arg)}} />}
    </View>
  );
}

