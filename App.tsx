import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
