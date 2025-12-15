import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user_image.png')}
        style={styles.userImage}
      />
      <>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userStatus}>Online</Text>
      </>
    </View>
  );
};

export default UserHeader;
