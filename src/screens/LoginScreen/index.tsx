import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './styles';
import { TextInput } from 'react-native';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

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
      <Button
        title="Login"
        onPress={() => navigation.navigate('ChatScreen')}
        color={colors.accentColor}
      />
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
