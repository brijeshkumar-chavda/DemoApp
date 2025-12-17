import { StyleSheet } from 'react-native';
import { fontSize, fontWeight } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  shoppingCartIconContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },

  productMainTitle: {
    fontSize: fontSize.xlarge,
    fontWeight: fontWeight.regular,
    marginBottom: 16,
  },

  productSubTitle: {
    fontSize: fontSize.xxlarge,
    fontWeight: fontWeight.bold,
    marginBottom: 16,
  },

  listContent: {
    paddingBottom: 20,
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },
});
