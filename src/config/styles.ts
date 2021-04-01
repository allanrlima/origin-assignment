interface Theme {
  input: {
    height: string;
  };
  colors: {
    brandColorPrimary: string;
    brandColorSecondary: string;
    primaryGray: string;
    secondaryGray: string;
    tertiaryGray: string;
  };
}

export const device = {
  desktop: `(min-width: 1024px)`
};

export const theme: Theme = {
  input: {
    height: '56px'
  },
  colors: {
    brandColorPrimary: '#1B31A8',
    brandColorSecondary: '#0079FF',
    primaryGray: '#1E2A32',
    secondaryGray: '#708797',
    tertiaryGray: '#4D6475'
  }
};
