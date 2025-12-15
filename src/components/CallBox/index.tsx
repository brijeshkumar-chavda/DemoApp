import { Text, View } from 'react-native';
import { styles } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';

type Props = {
  isMine?: boolean;
  // callType: 'audio' | 'video';
};

const CallBox = (props: Props) => {
  return (
    <View
      style={props.isMine ? styles.sentContainer : styles.receivedContainer}
    >
      <View
        style={[
          props.isMine
            ? styles.sentCallIconContainer
            : styles.receivedCallIconContainer,
        ]}
      >
        <MaterialIcons
          name="call"
          size={24}
          color={props.isMine ? colors.black : colors.white}
        />
      </View>

      <View style={styles.callDetails}>
        <Text style={styles.callName}>Audio Call</Text>
        <Text style={styles.callTime}>10 mins</Text>
      </View>

      {/* {props.isMine ? (
      ) : (
        <View style={styles.callDetails}>
          <Text style={styles.callName}>Video Call</Text>
          <Text style={styles.callTime}>10 mins</Text>
        </View>
      )} */}

      <View style={styles.rewardMoneyContainer}>
        <MaterialIcons name="currency-rupee" size={24} color={colors.black} />
        <Text style={styles.rewardMoneyText}>10</Text>
      </View>
    </View>
  );
};

export default CallBox;
