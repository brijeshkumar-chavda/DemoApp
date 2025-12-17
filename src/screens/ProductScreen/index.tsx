import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/colors';
import ProductCard from '../../components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetch('https://fakestoreapi.com/products');
        const json = await result.json();
        setProducts(json);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductCard title={item.title} price={item.price} image={item.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.shoppingCartIconContainer}>
        <MaterialIcons name="shopping-cart" size={24} color={colors.black} />
      </View>

      <View>
        <Text style={styles.productMainTitle}>Shop</Text>
        <Text style={styles.productSubTitle}>Product List</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.accentColor} />
      ) : (
        <FlatList
          data={products}
          renderItem={renderProductItem}
          numColumns={2}
          columnWrapperStyle={styles.productGridRowSpace}
        />
      )}
    </View>
  );
};

export default ProductScreen;
