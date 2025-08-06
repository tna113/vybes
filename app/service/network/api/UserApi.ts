import {UserProfileResponse} from '@/types';
import {GetRequest} from '../types';

type UserProfileParams = {
  token?: string;
};

type IsFollowingResponse = {
  isFollowing: boolean[];
};
type IsFollowingParams = {
  playlistId: string;
};

export class UserApi {
  static UserProfile = (): GetRequest<
    UserProfileResponse,
    UserProfileParams
  > => {
    return {
      endpoint: '/me',
      mapToURLSearchParams: (data: UserProfileParams) => {
        const params = new URLSearchParams();
        params.append('token ', data.token ?? '');
        return params;
      },
    };
  };

  static IsFollowing = ({
    playlistId,
  }: IsFollowingParams): GetRequest<IsFollowingResponse> => {
    return {
      endpoint: `/playlist/${playlistId}/followers/contains`,
    };
  };
}
