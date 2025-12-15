import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../../components/UserHeader';

import { styles } from './styles';
import AudioCallBox from '../../components/AudioCallBox';
import MessageBox from '../../components/MessageBox';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <AudioCallBox />
      <MessageBox />
    </SafeAreaView>
  );
};

export default ChatScreen;
