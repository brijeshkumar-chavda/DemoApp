import { Text, View, Image } from 'react-native';
import { styles } from './styles';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductCard;
