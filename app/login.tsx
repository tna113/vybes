import {router} from 'expo-router';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../components/Input';
import validate from './service/auth/validate';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputState, setInputState] = useState({
    username: '',
    userNameError: '',
    password: '',
    passwordError: '',
  });

  const handleLogin = async () => {
    let hasError = false;

    // Username validation
    if (!validate.username(inputState.username)) {
      inputState.userNameError = 'Invalid username';
      hasError = true;
    }

    // Password validation
    if (!validate.password(inputState.password)) {
      inputState.passwordError = 'Invalid password';
      hasError = true;
    }

    setInputState({
      username: inputState.username,
      userNameError: inputState.userNameError,
      password: inputState.password,
      passwordError: inputState.passwordError,
    });

    if (hasError) {
      return;
    }

    //TODO: VYBES-51: login logic

    //TODO: VYBES-56: authorize with spotify
    // const authUrl = await getAuthUrl();
    // window.location.href = authUrl;
    router.push('/(tabs)');
  };

  const handleForgotPassword = () => {
    //TODO: VYBES-100: forgot password
  };

  const handleCreateAccount = () => {
    //TODO: VYBES-101: create account
  };

  const handleDebug = () => {
    router.push('/debug');
  };

  const clearUsernameError = () => {
    setInputState({...inputState, userNameError: ''});
  };

  const clearPasswordError = () => {
    setInputState({...inputState, passwordError: ''});
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <View style={styles.star}>
              <Text style={styles.logoText}>v</Text>
            </View>
          </View>
          <Text style={styles.appName}>vybes</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder='username'
            value={inputState.username}
            onChangeText={(username) =>
              setInputState({...inputState, username})
            }
            error={inputState.userNameError}
            onClearError={clearUsernameError}
          />
          <Input
            placeholder='password'
            value={inputState.password}
            onChangeText={(password) =>
              setInputState({...inputState, password})
            }
            secureTextEntry={!showPassword}
            error={inputState.passwordError}
            onClearError={clearPasswordError}
            iconName={showPassword ? 'eye-off' : 'eye'}
            onIconPress={() => setShowPassword(!showPassword)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.submitText}>submit</Text>
          </TouchableOpacity>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.bottomLinkText}>forgot password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDebug}>
              <Text style={[styles.bottomLinkText, styles.debugText]}>
                debug
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={handleCreateAccount} style={styles.footerLink}>
        <Text style={styles.createAccountText}>create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingBottom: 216,
  },
  inputContainer: {
    minWidth: 288,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 88,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#7FB0A0',
    borderWidth: 2,
    borderColor: '#5C8B7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    width: 50,
    height: 50,
    backgroundColor: '#A0D0C0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#5C8B7E',
    fontSize: 24,
    fontWeight: 'bold',
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  submitButton: {
    backgroundColor: '#5C8B7E',
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  linksContainer: {
    alignItems: 'center',
    gap: 15,
  },
  bottomLinkText: {
    color: '#9BA1A6',
    fontSize: 12,
  },
  createAccountText: {
    color: '#7FB0A0',
    fontSize: 14,
    fontWeight: '500',
  },
  debugText: {
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 8,
    backgroundColor: '#B07F8F',
    paddingHorizontal: 16,
  },
  footerLink: {
    position: 'absolute',
    bottom: 72,
  },
});
