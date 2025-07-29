import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login attempt:', { username, password });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password pressed');
  };

  const handleCreateAccount = () => {
    // Handle create account logic
    console.log('Create account pressed');
  };

  const handleBackToHome = () => {
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <View style={styles.star}>
                <Text style={styles.logoText}>v</Text>
              </View>
            </View>
            <Text style={styles.appName}>vybes</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="#9BA1A6"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
            
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="password"
                placeholderTextColor="#9BA1A6"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#9BA1A6"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>submit</Text>
          </TouchableOpacity>

          {/* Links */}
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>forgot password</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text style={styles.createAccountText}>create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
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
    marginBottom: 16,
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
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 1,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#9BA1A6',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 15,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#9BA1A6',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingRight: 50,
    color: '#FFFFFF',
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
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
  forgotPasswordText: {
    color: '#9BA1A6',
    fontSize: 14,
  },
  createAccountText: {
    color: '#7FB0A0',
    fontSize: 14,
    fontWeight: '500',
  },
}); 