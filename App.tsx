import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import useCachedResources from './hooks/useCachedResources';
import Home from './src/Home';
import 'react-native-gesture-handler';

export default function App() {
  const isLoadingComplete = useCachedResources();
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Warning:...']);
 

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
         <Home />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
