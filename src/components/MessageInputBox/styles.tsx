import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    gap: 12,
    // backgroundColor: 'red',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 12,
  },
  input: {
    flex: 1,
  },
});
