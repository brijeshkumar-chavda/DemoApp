import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  receivedMessage: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
  },
  sentMessage: {
    backgroundColor: colors.accentColor,
    alignSelf: 'flex-end',
  },
});
