import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
