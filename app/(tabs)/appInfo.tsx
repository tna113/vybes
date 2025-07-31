import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Screen from '@/components/Screen';
import { useRouter } from 'expo-router';

export default function AppInfoScreen() {
  const router = useRouter();

  const handleCoffeeButtonPress = () => {
    Linking.openURL('https://google.com');
  };

  const handleBackPress = () => {
    router.push('/(tabs)/user');
  };

  return (
    <Screen
      iconName="back"
      title="app info"
      subtitle="thanks for using this app :)"
      onBackPress={handleBackPress}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Info Items Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <ThemedText style={styles.infoTitle}>author</ThemedText>
            <ThemedText style={styles.infoValue}>thea a.</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText style={styles.infoTitle}>github</ThemedText>
            <ThemedText style={styles.infoValue}>tna113</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText style={styles.infoTitle}>version</ThemedText>
            <ThemedText style={styles.infoValue}>0.0.1</ThemedText>
          </View>
        </View>

        {/* Coffee Button */}
        <View style={styles.coffeeButtonSection}>
          <TouchableOpacity 
            style={[
              styles.coffeeButton,
              styles.activeCoffeeButton
            ]}
            onPress={handleCoffeeButtonPress}
          >
            <ThemedText style={styles.activeCoffeeButtonText}>
              buy me a coffee!
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contentSection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  infoSection: {
    paddingTop: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  infoItem: {
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 14,
    color: '#F5F0ECE5',
    opacity: 0.7,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  coffeeButtonSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#1E1E1E',
    alignItems: 'flex-start',
  },
  coffeeButton: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeCoffeeButton: {
    backgroundColor: '#5C8B7E',
    borderColor: '#5C8B7E',
  },
  coffeeButtonText: {
    color: '#868686',
    fontSize: 14,
    fontWeight: '600',
  },
  activeCoffeeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
}); 