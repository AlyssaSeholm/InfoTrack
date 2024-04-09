import React, { FC } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';


interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  
  return (
    <>
      <div data-testid="SiteLayout">

        <NavigationBar />

        { children }

        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
