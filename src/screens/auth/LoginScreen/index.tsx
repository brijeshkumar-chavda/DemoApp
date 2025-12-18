import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { validateUser } from '../../../utils/userManager';
import { styles } from './styles';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

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
      <CustomInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />

      <CustomButton title="Login" onPress={handleLogin} />
      <View style={styles.buttonSpacer}>
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
