import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '../../components/UserHeader';

import { styles } from './styles';
import CallBox from '../../components/CallBox';
import MessageBox from '../../components/MessageBox';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader />
      <CallBox isMine />
      <CallBox />
      <MessageBox message="I need help for my react native project." />
      <MessageBox isMine message="Sure, I can help you with that!" />
    </SafeAreaView>
  );
};

export default ChatScreen;
