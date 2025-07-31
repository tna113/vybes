import ActiveButtons, {ActiveButton} from '@/components/ActiveButtons';
import {ThemedText} from '@/components/ThemedText';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {useRouter} from 'expo-router';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StarRating from './StarRating';

type ScreenProps = {
  enableEmptySpace?: boolean;
  iconName?: string;
  title: string;
  subtitle?: string;
  activeButtons?: ActiveButton[];
  onSearchPress?: () => void;
  children: React.ReactNode;
  starRating?: number;
  onBackPress?: () => void;
};

export default function Screen({
  enableEmptySpace = false,
  iconName,
  title,
  subtitle,
  activeButtons = [],
  onSearchPress,
  children,
  starRating,
  onBackPress,
}: ScreenProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1: Fixed Header Section */}
      <View style={styles.headerSection}>
        {iconName === 'back' ? (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol size={24} name='arrow.left' color={'#FFFFFF'} />
          </TouchableOpacity>
        ) : iconName ? (
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>{iconName}</Text>
          </View>
        ) : null}

        <View style={styles.titleSection}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          {subtitle && (
            <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>
          )}

          {/* Large Empty Space */}
          {enableEmptySpace && <View style={styles.emptySpace} />}
        </View>

        {/* Star Rating - Positioned at the end of header */}
        {starRating && (
          <View style={styles.starRatingWrapper}>
            <StarRating rating={starRating || 0} />
          </View>
        )}
      </View>

      {/* Part 2: Scrollable Content Section */}
      <View style={styles.contentSection}>
        {/* Active Buttons */}
        <ActiveButtons
          activeButtons={activeButtons}
          onSearchPress={onSearchPress}
        />

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
    paddingHorizontal: 28,
    paddingTop: 88,
    paddingBottom: 28,
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
  starRatingWrapper: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
});
