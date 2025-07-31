import {IconSymbol} from '@/components/ui/IconSymbol';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
  return (
    <View style={styles.starRatingContainer}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <IconSymbol
          key={starIndex}
          size={48}
          name='star.fill'
          color={starIndex <= rating ? '#5E8D78' : '#1F3D31'}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export default StarRating;
