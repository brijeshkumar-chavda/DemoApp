import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../../components/UserHeader';

import { styles } from './styles';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
    </SafeAreaView>
  );
};

export default ChatScreen;
