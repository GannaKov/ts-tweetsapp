import React from "react";
import { PageWrapper } from "./Home.styled";
import homeBG from "../../images/homepage-photo.jpg";
//"../../images/homepage-photo.jpg";
export default function Home() {
  return (
    <PageWrapper>
      <img src={homeBG} alt="Home page background" />
    </PageWrapper>
  );
}
