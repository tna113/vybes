import {Network} from '@/app/service/network/Network';
import {Track} from '@/types';
import {useQuery} from '@tanstack/react-query';

const getTracks = async () => {
  try {
    const response = await Network.get<Track[]>('/rest/v1/tracks');
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching tracks:', error);
    throw error;
  }
};

export const useGetTracksQuery = () => {
  return useQuery({
    queryKey: ['tracks'],
    queryFn: () => getTracks(),
  });
};
