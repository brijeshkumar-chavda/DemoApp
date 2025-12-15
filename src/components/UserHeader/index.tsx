import { Image, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const UserHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <MaterialIcons name="arrow-back" size={24} color={colors.black} />
      </View>
      <Image
        source={require('../../assets/images/user_image.png')}
        style={styles.userImage}
      />
      <View style={styles.userDetails}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userStatus}>Online</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="settings" size={24} color={colors.black} />
        <MaterialIcons name="info" size={24} color={colors.black} />
      </View>
    </View>
  );
};

export default UserHeader;
