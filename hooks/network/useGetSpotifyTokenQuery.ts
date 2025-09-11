import {Network} from '@/app/service/network/Network';
import {useQuery} from '@tanstack/react-query';

const getSpotifyAccessToken = async (): Promise<string> => {
  const response = await Network.backendPost<{
    access_token: string;
    token_type: string;
    expires_in: number;
  }>('/api/auth/spotify/token', {});

  return response.access_token ?? '';
};

export const useGetSpotifyTokenQuery = () => {
  return useQuery({
    queryKey: ['spotify_token'],
    queryFn: getSpotifyAccessToken,
  });
};
