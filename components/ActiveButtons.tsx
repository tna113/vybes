import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export type ActiveButton = {
  title: string;
  screen: string;
  onPress?: () => void;
}

type ActiveButtonsProps = {
  activeButtons: ActiveButton[];
  onSearchPress?: () => void;
}

export default function ActiveButtons({ activeButtons, onSearchPress }: ActiveButtonsProps) {
  const router = useRouter();
  const [activeButton, setActiveButton] = React.useState<string>('');

  const handleActiveButtonPress = (button: ActiveButton) => {
    setActiveButton(button.title);
    if (button.onPress) {
      button.onPress();
    } else if (button.screen && button.screen !== '') {
      
      // The type 'never' is used here because the router.push() from expo-router
      // has a complex type signature that includes path parameters and query parameters.
      // Using 'as string' would be incorrect since the path might include these parameters.
      // expo-router's type system expects a specific path format that matches your app's routing structure.
      router.push(button.screen as never);
    }
  };

  if (activeButtons.length === 0) {
    return null;
  }

  return (
    <View style={styles.actionButtons}>
      <View style={styles.buttonsContainer}>
        {activeButtons.map((button, index) => (
          <TouchableOpacity 
            key={index}
            style={[
              styles.actionButton,
              activeButton === button.title && styles.activeButton
            ]}
            onPress={() => handleActiveButtonPress(button)}
          >
            <ThemedText style={activeButton === button.title ? styles.activeButtonText : styles.actionButtonText}>
              {button.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      
      {onSearchPress && (
        <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
          <IconSymbol size={20} name="magnifyingglass" color={'#FFFFFF'} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#5C8B7E', // Match login.tsx green
    borderColor: '#5C8B7E',
  },
  actionButtonText: {
    color: '#868686',
    fontSize: 14,
    fontWeight: '600',
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 