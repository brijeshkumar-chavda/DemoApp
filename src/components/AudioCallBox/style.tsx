import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accentColor,
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: 12,
    marginBottom: 12,
  },

  audioCallIconContainer: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
  },

  callDetails: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  callName: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },

  callTime: {
    fontSize: fontSize.small,
    color: colors.black,
  },

  rewardMoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    // TODO: Ask sir why justifyContent: 'flex-end', is not working
    marginLeft: 'auto',
  },

  rewardMoneyText: {
    fontSize: fontSize.xlarge,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },
});
