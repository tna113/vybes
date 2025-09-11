import {Network} from '@/app/service/network/Network';
import {Track} from '@/types';
import {useQuery} from '@tanstack/react-query';

const getTracks = async () => {
  const response = await Network.backendGet<{
    tracks: Track[];
    count: number;
    success: boolean;
  }>('/api/tracks');

  if (response?.tracks) {
    return response.tracks;
  } else {
    return [];
  }
};

export const useGetTracksQuery = () => {
  return useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks(),
  });
};
