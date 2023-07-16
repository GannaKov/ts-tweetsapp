import styled from "styled-components";
import pictureBG from "../../images/pictureBG-min.png";
import logo from "../../images/logo.png";
export const TweetWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  border-radius: 20px;

  box-shadow: -2.58rem 6.87rem 20.62rem rgba(0, 0, 0, 0.23);
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(71, 28, 169, 1),
      rgba(87, 54, 163, 1),
      rgba(75, 42, 153, 1)
    ),
    url("${pictureBG}"), url("${logo}");
  background-position: top 0px left 0px, top 28px center, top 20px left 20px;
  background-size: 380px 460px, 308px 168px, 76px 22px;
  background-blend-mode: overlay;
`;
export const AvatarWrapper = styled.div`
  margin: 178px auto 26px;
  object-fit: cover;
  width: 80px;
  height: 80px;
  border: 8px solid rgba(235, 216, 255, 1);
  border-radius: 100%;
  overflow: hidden;
  box-shadow: inset 0px 4.39px 3.29px 0px rgba(251, 248, 255, 1),
    0px 4.39px 4.39px 0px rgba(0, 0, 0, 0.06),
    inset 0px -2.2px 4.39px 0px rgba(174, 123, 227, 1);
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  &::before {
    display: inline-block;
    position: absolute;
    content: "";

    top: 214px;
    left: 0px;

    height: 8px;
    background-color: rgba(235, 216, 255, 1);
    width: 151px;

    box-shadow: inset 0px 3.44px 2.58px 0px rgba(251, 248, 255, 1),
      0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.06),
      inset 0px -1.72px 3.44px 0px rgba(174, 123, 227, 1);
  }
  &::after {
    display: inline-block;
    position: absolute;
    content: "";

    top: 214px;
    right: 0px;

    height: 8px;
    background-color: rgba(235, 216, 255, 1);
    width: 151px;

    box-shadow: inset 0px 3.44px 2.58px 0px rgba(251, 248, 255, 1),
      0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.06),
      inset 0px -1.72px 3.44px 0px rgba(174, 123, 227, 1);
  }
`;
export const TweetsQuantity = styled.p`
  text-transform: uppercase;
  margin: 0 auto 16px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: rgba(235, 216, 255, 1);
`;
export const FollowersQuantity = styled.p`
  text-transform: uppercase;
  margin: 0 auto 26px;
  color: rgba(235, 216, 255, 1);
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
`;
export const Button = styled.button<{ isFollowing: boolean }>`
  background-color: ${(props) =>
    props.isFollowing ? "rgba(92, 211, 168, 1)" : "rgba(235, 216, 255, 1)"};
  margin: 0 auto;
  width: 196px;
  height: 50px;
  padding: 14px auto;
  border-radius: 10.31px;
  border: transparent;
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${(props) =>
      props.isFollowing ? "rgba(52,207,150,1)" : "rgba(255, 215, 255, 1)"};
  }
`;
export const ButtonText = styled.p`
  text-transform: uppercase;
  color: rgba(55, 55, 55, 1);
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
`;
