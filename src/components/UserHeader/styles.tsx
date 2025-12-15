import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: colors.background,
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
