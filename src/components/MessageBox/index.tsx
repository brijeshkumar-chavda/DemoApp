import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  isMine?: boolean;
  message: string;
};

const MessageBox = (props: Props) => {
  return (
    <View
      style={[
        styles.container,
        props.isMine ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text>{props.message}</Text>
    </View>
  );
};

export default MessageBox;
