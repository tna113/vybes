// TODO: filter out whats not an optional param
export type UserProfileResponse = {
  country?: string;
  display_name?: string; // null if not available
  email?: string; // unverified, no proof it belongs to user
  explicitContent?: {
    filter_enabled?: boolean;
    filter_locked?: boolean;
  };
  external_urls?: {
    //only available
    spotify?: string; //known external urls for this object
  };
  followers?: {
    href?: null; // web api doesnt support it atm 8/1
    total?: number; // total number of followers
  };
  href?: string; // link to web api endpoint for this user
  id?: string; // spotifyuser id for the user
  images?: {
    url: string; // flagged as required on spotify api
    height: number; // ^, nullable
    width: number; // ^, nullable
  }[];
  product?: string; // user's subscription level
  type?: 'user'; // object type
  uri?: string; // uri for user
};
