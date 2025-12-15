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
      <CallBox isMine callType="audio" />
      <CallBox callType="audio" />
      <CallBox isMine callType="video" />
      <CallBox callType="video" />
      <MessageBox message="I need help for my react native project." />
      <MessageBox isMine message="Sure, I can help you with that!" />
      <CallBox callType="video" />
    </SafeAreaView>
  );
};

export default ChatScreen;
