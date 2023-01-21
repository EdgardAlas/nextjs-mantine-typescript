import {
  DefaultMantineColor,
  MantineThemeOverride,
  Tuple,
} from '@mantine/core';

type ExtendedCustomColors = DefaultMantineColor;

export const MantineTheme: MantineThemeOverride = {
  fontFamily: 'var(--font-family)',
  headings: {
    fontFamily: 'var(--font-family)',
  },
  fontSizes: { xs: 16, sm: 17, md: 16, lg: 16, xl: 20 },
  globalStyles: () => ({
    html: {
      scrollBehavior: 'smooth',
      scrollPaddingTop: 140,
    },

    ['.grecaptcha-badge']: {
      visibility: 'hidden',
      opacity: 0,
      boxShadow: 'none',
    },
  }),
  other: {
    headingFontSizes: {
      h1: { xs: 35, md: 45, lg: 60 },
      h2: { xs: 26, md: 36, lg: 44 },
      h3: { xs: 20, md: 30, lg: 36 },
      h4: { xs: 18, md: 25, lg: 30 },
      h5: { xs: 16, md: 20, lg: 25 },
    },
  },
};

export type HeadingType = { xs: number; md: number; lg: number };
export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type HeadingTypes = {
  // eslint-disable-next-line no-unused-vars
  [key in Headings]: HeadingType;
};

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
  export interface MantineThemeOther {
    headingFontSizes: HeadingTypes;
  }
}
