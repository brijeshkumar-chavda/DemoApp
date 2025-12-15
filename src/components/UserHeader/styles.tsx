import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: colors.testBackground,
  },

  textContainer: {
    marginLeft: 12,
    flex: 1,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },

  userName: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
  },

  userStatus: {
    fontSize: fontSize.small,
    color: colors.placeholder,
  },
});
