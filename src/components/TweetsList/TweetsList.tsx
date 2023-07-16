import React from "react";
import { TweetsListWrapper } from "./TweetsList.styled";
import TweetCard from "../TweetCard/TweetCard";
import { ITweet } from "../../types/tweet";
//---------------------

interface IProps {
  tweets: ITweet[];
  addFollowingsCurrentUser: (id: string) => void;
  followings: string[];
  removeFollowingsCurrentUser: (id: string) => void;
}

const TweetsList: React.FC<IProps> = ({
  tweets,
  addFollowingsCurrentUser,
  followings,
  removeFollowingsCurrentUser,
}) => {
  return (
    <>
      {tweets.length > 0 && (
        <TweetsListWrapper>
          {tweets.map((tweet) => (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              addFollowingsCurrentUser={addFollowingsCurrentUser}
              removeFollowingsCurrentUser={removeFollowingsCurrentUser}
              followings={followings}
            />
          ))}
        </TweetsListWrapper>
      )}
    </>
  );
};
export default TweetsList;
