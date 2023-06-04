export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  fonts: {
    medium: 'Montserrat-Medium', //500
    semiBold: 'Montserrat-SemiBold', //600
  },
  fontSizes: [
    '18px', // 0
    '20px', // 1
    '24px', // 2
    '28px', // 3
  ],
  colors: {
    primary: '#373737',
    secondary: '#EBD8FF',
    accent: '#5CD3A8',
  },
  backgraund: {
    primary: '#FFFFFF',
    accent: '#5CD3A8',
    gradient:
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
  },
  boxShadows: {
    main: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
    secondary: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    secondaryInsert: 'inset 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    tertiary:
      '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF',
  },
  textShodows: {
    main: '0px 2px 3px #373737, 1px 1px 2px #373737',
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};
