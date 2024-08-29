import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './data/store/store';



function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.backgroundStyle}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'white'}
          />

          <Cart />

        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
