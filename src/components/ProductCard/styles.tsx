import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    marginBottom: 8,
    color: colors.black,
  },
  price: {
    fontSize: fontSize.medium,
    color: colors.accentColor,
    fontWeight: fontWeight.bold,
  },
});
