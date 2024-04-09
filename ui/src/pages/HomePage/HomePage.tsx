import React, { FC } from 'react';
// import { HomePageWrapper } from './HomePage.styled';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
//  <HomePageWrapper data-testid="HomePage">
//     HomePage Component
//  </HomePageWrapper>
   <div data-testid="HomePage">
      <h1>HomePage Component</h1>
   </div>
);

export default HomePage;
