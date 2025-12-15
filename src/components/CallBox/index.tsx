import { Text, View } from 'react-native';
import { styles } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';

type Props = {
  isMine?: boolean;
  callType: 'audio' | 'video';
};

const CallBox = (props: Props) => {
  const isVideo = props.callType === 'video';
  const iconName = isVideo ? 'videocam' : 'call';
  const title = isVideo ? 'Video Call' : 'Audio Call';
  const rewardMoney = isVideo ? '60' : '10';
  const callTime = isVideo ? '60min' : '10min';

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
          name={iconName}
          size={24}
          color={props.isMine ? colors.black : colors.white}
        />
      </View>

      <View style={styles.callDetails}>
        <Text style={styles.callName}>{title}</Text>
        <Text style={styles.callTime}>{callTime}</Text>
      </View>

      <View style={styles.rewardMoneyContainer}>
        <MaterialIcons name="currency-rupee" size={24} color={colors.black} />
        <Text style={styles.rewardMoneyText}>{rewardMoney}</Text>
      </View>
    </View>
  );
};

export default CallBox;
