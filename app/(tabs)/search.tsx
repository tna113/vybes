import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Screen from '@/components/Screen';
import  { ActiveButton } from '@/components/ActiveButtons';

export default function SearchScreen() {
  const [activeButton, setActiveButton] = useState('song');

  const activeButtons: ActiveButton[] = [
    { 
      title: 'song', 
      screen: '',
      onPress: () => setActiveButton('song')
    },
    { 
      title: 'artist', 
      screen: '',
      onPress: () => setActiveButton('artist')
    },
    { 
      title: 'album', 
      screen: '',
      onPress: () => setActiveButton('album')
    },
    { 
      title: 'user', 
      screen: '',
      onPress: () => setActiveButton('user')
    }
  ];

  return (
    <Screen
      iconName=" "
      title="search"
      subtitle="subtitle"
      activeButtons={activeButtons}
    >
      <ScrollView style={styles.contentSection} showsVerticalScrollIndicator={false}>
        {/* Search Input Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <IconSymbol size={28} name="magnifyingglass" color={'#A9A9A9'} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#868686"
            />
          </View>
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
  searchSection: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingLeft: 8,
  },
}); 