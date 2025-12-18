import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { addUser } from '../../../utils/userManager';
import { colors } from '../../../constants/colors';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    const success = addUser({ email, password });

    if (success) {
      Alert.alert('Success', 'Account created successfully', [
        { text: 'OK', onPress: () => navigation.navigate('LoginScreen') },
      ]);
    } else {
      Alert.alert('Error', 'User already exists');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
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
      <Button
        title="Sign Up"
        onPress={handleSignUp}
        color={colors.accentColor}
      />
      <View style={styles.buttonSpacer}>
        <Button
          title="Back to Login"
          onPress={() => navigation.navigate('LoginScreen')}
          color={colors.accentColor}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
