export interface ITweet {
  name: string;
  avatar: string;
  tweets: number;
  followers: number;
  id: string;
}
export interface ICurrentUser {
  createdAt?: string;
  name?: string;
  followings?: string[];
  totalItems?: number;
  id?: string;
}
