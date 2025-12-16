import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';
import { colors } from '../../constants/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
        style={styles.textInput}
        placeholderTextColor={colors.placeholder}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        style={styles.textInput}
        placeholderTextColor={colors.placeholder}
      />
      <Button title="Login" onPress={() => {}} color={colors.accentColor} />
      <View style={styles.buttonSpacer}>
        <Button title="Sign Up" onPress={() => {}} color={colors.accentColor} />
      </View>
    </View>
  );
};

export default LoginScreen;
