import { Image, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user_image.png')}
        style={styles.userImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userStatus}>Online</Text>
      </View>
      <MaterialIcons name="settings" size={24} color={colors.black} />
    </View>
  );
};

export default UserHeader;
