import { Image, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants/colors';
import { styles } from './styles';

const UserHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.black} />
      </TouchableOpacity>
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
