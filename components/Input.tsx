import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCorrect?: boolean;
  error?: string;
  onClearError?: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  onIconPress?: () => void;
  iconColor?: string;
  iconSize?: number;
  enableErrorMessage?: boolean;
}

export default function Input({
  placeholder,
  value,
  onChangeText,
  style,
  secureTextEntry = false,
  autoCapitalize = 'none',
  autoCorrect = false,
  error,
  onClearError,
  iconName,
  onIconPress,
  iconColor = '#9BA1A6',
  iconSize = 20,
  enableErrorMessage = false,
}: InputProps) {
  const handleTextChange = (text: string) => {
    onChangeText(text);
    if (error && onClearError) {
      onClearError();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            iconName && styles.inputWithIcon,
            style,
          ]}
          placeholder={placeholder}
          placeholderTextColor='#9BA1A6'
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
        />
        {iconName && onIconPress && (
          <TouchableOpacity style={styles.icon} onPress={onIconPress}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.errorContainer}>
        {error && enableErrorMessage && (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 4,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#9BA1A6',
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 16,
    color: '#FFFFFF',
    fontSize: 12,
  },
  inputWithIcon: {
    paddingRight: 50,
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#FF4444',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  errorText: {
    color: '#FF4444',
    fontSize: 12,
  },
  errorContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    minHeight: 30, // Reserve space for error text (font size + padding)
  },
});
