import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../../components/UserHeader';

import { styles } from './styles';
import AudioCallBox from '../../components/AudioCallBox';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <AudioCallBox />
    </SafeAreaView>
  );
};

export default ChatScreen;
