import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
  },
});
