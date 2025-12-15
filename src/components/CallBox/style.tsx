import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  sentContainer: {
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

  receivedContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },

  sentCallIconContainer: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  receivedCallIconContainer: {
    backgroundColor: colors.black,
    padding: 12,
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  receivedVideoCall: {},

  sentVideoCall: {},
});
