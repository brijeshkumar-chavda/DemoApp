import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import ChatScreen from '../screens/app/ChatScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ProductScreen from '../screens/app/ProductScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'LoginScreen',
  screens: {
    LoginScreen: {
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
    SignUpScreen: {
      screen: SignUpScreen,
      options: {
        headerShown: false,
      },
    },
    ChatScreen: {
      screen: ChatScreen,
      options: {
        headerShown: false,
      },
    },
    ProductScreen: {
      screen: ProductScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
