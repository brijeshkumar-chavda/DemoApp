import { View } from 'react-native';
import { TextInput } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';
import { useState } from 'react';

const MessageInputBox = () => {
  const [message, setMessage] = useState('');
  return (
    <View style={styles.container}>
      <MaterialIcons name="attachment" size={24} color={colors.black} />
      <TextInput
        placeholder="Type your message"
        placeholderTextColor={colors.placeholder}
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <MaterialIcons name="currency-rupee" size={24} color={colors.black} />
      <MaterialIcons name="photo-camera" size={24} color={colors.black} />
    </View>
  );
};

export default MessageInputBox;
