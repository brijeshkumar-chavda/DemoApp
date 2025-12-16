import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { validateUser } from '../../utils/userManager';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: How to avoid this any type in useNavigation and make better navigation
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please enter email and password');
      return;
    }

    const isValid = validateUser({ email, password });

    if (isValid) {
      navigation.navigate('ChatScreen');
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Demo App</Text>
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
      <Button title="Login" onPress={handleLogin} color={colors.accentColor} />
      <View style={styles.buttonSpacer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUpScreen')}
          color={colors.accentColor}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
