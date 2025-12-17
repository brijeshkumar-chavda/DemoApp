import { View } from 'react-native';
import UserHeader from '../../components/UserHeader';

import { styles } from './styles';
import CallBox from '../../components/CallBox';
import MessageBox from '../../components/MessageBox';
import MessageInputBox from '../../components/MessageInputBox';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <UserHeader />
      <CallBox isMine callType="audio" />
      <CallBox callType="audio" />
      <CallBox isMine callType="video" />
      <CallBox callType="video" />
      <MessageBox message="I need help for my react native project." />
      <MessageBox isMine message="Sure, I can help you with that!" />
      <CallBox callType="video" />
      <MessageInputBox />
    </View>
  );
};

export default ChatScreen;
