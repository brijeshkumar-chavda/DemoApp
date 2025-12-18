import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { fontSize, fontWeight } from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 16,
  },

  title: {
    fontSize: fontSize.xlarge,
    fontWeight: fontWeight.bold,
    marginBottom: 16,
  },

  text: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  buttonSpacer: {
    marginTop: 16,
  },
});
