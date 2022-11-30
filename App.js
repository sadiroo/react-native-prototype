import { useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import OptionsPage from './src/pages/OptionsPage';
import TimerPage from './src/pages/TimerPage';
import WelcomePage from './src/pages/WelcomePage';
import AdventurePage from './src/pages/AdventurePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        {currentPage === 'welcome' &&
          <WelcomePage onChangePage={(arg) => { setCurrentPage(arg); }} />}
        {currentPage === 'timer' &&
          <TimerPage onChangePage={(arg) => { setCurrentPage(arg) }} />}
        {currentPage === 'options' &&
          <OptionsPage onChangePage={(arg) => { setCurrentPage(arg) }} />}
        {currentPage === 'adventure' &&
          <AdventurePage onChangePage={(arg) => { setCurrentPage(arg) }} />}
      </View>
    </Provider>
  );
}

