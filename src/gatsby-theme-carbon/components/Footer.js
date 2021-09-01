import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();

const Content = () => (
  <>
      <p>      
          Copyright © {currentYear} IBM
      </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/', linkText: 'IBM' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
