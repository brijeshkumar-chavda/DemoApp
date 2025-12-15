import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';
import { colors } from '../../constants/colors';

const LoginScreen = () => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
    <TextInput value={text} onChangeText={onChangeText} placeholder="Enter your email address" />
    <Button title="Login" onPress={() => {}} color={colors.accentColor} />
    <Button title="Sign Up" onPress={() => {}} color={colors.accentColor} />
    </View>
  );
};

export default LoginScreen;
