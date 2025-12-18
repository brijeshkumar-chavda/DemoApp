import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.textInput}
      placeholderTextColor={colors.placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;
