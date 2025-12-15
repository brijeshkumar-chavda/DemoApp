import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  userDetails: {
    marginLeft: 12,
    flex: 1,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.black,
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
