import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export interface ActiveButton {
  title: string;
  screen: string;
  onPress?: () => void;
}

interface ScreenProps {
  enableEmptySpace?: boolean;
  iconName?: string;
  title: string;
  subtitle?: string;
  activeButtons?: ActiveButton[];
  children: React.ReactNode;
}

export default function Screen({ 
  enableEmptySpace = false,
  iconName, 
  title, 
  subtitle, 
  activeButtons = [], 
  children 
}: ScreenProps) {
  const router = useRouter();
  const [activeButton, setActiveButton] = React.useState<string>('');

  const handleBackPress = () => {
    router.back();
  };

  const handleActiveButtonPress = (button: ActiveButton) => {
    setActiveButton(button.title);
    if (button.onPress) {
      button.onPress();
    } else if (button.screen && button.screen !== '') {
      router.push(button.screen as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1: Fixed Header Section */}
      <View style={styles.headerSection}>
        {iconName === 'back' ? (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol size={24} name="arrow.left" color={'#FFFFFF'} />
          </TouchableOpacity>
        ) : iconName ? (
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>{iconName}</Text>
          </View>
        ) : null}
        
        <View style={styles.titleSection}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}

          {/* Large Empty Space */}
          {enableEmptySpace && <View style={styles.emptySpace} />}
        </View>
      </View>

      {/* Part 2: Scrollable Content Section */}
      <View style={styles.contentSection}>
        {/* Active Buttons */}
        {activeButtons.length > 0 && (
          <View style={styles.actionButtons}>
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
        )}
        
        {/* Children Content */}
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background
  },
  headerSection: {
    backgroundColor: '#191919',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5C8B7E', // Match login.tsx green
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileText: {
    color: '#006400', // Dark green text
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#F5F0ECE5',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#F5F0ECE5',
    opacity: 0.8,
  },
  emptySpace: {
    height: 240, // Large empty space as requested
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 10,
    backgroundColor: '#1E1E1E',
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
}); 