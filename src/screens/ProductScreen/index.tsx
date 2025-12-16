import { Text, View } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shoppingCartIconContainer}>
        <MaterialIcons name="shopping-cart" size={24} color={colors.black} />
      </View>

      <View>
        <Text style={styles.productMainTitle}>Watches</Text>
        <Text style={styles.productSubTitle}>Wrist Watches</Text>
      </View>
    </View>
  );
};

export default ProductScreen;
