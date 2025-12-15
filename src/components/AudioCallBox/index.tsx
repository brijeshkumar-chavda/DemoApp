import { Text, View } from 'react-native';
import { styles } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';

const AudioCallBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.audioCallIconContainer}>
        <MaterialIcons name="call" size={24} color={colors.black} />
      </View>
      <View style={styles.callDetails}>
        <Text style={styles.callName}>Audio Call</Text>
        <Text style={styles.callTime}>10 mins</Text>
      </View>
      <View style={styles.rewardMoneyContainer}>
        <MaterialIcons name="currency-rupee" size={24} color={colors.black} />
        <Text style={styles.rewardMoneyText}>10</Text>
      </View>
    </View>
  );
};

export default AudioCallBox;
