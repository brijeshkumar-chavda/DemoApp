import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { addUser } from '../../../utils/userManager';
import { styles } from './styles';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

      <CustomInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <CustomInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
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
      <CustomButton title="Sign Up" onPress={handleSignUp} />
      <View style={styles.buttonSpacer}>
        <CustomButton
          title="Back to Login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
