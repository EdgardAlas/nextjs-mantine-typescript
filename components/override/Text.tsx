import { TextProps, Sx, Text as MantineText } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends TextProps {
  children: ReactNode;
  sx?: Sx;
  component?: any;
  textColor?: string;
  [key: string | number | symbol]: any;
}

export const Text = ({ children, sx, component = 'p', ...rest }: Props) => {
  return (
    <MantineText
      sx={[
        (theme) => ({
          gap: 5,
          fontSize: theme.fontSizes.xs,
          margin: 0,
          [theme.fn.largerThan('sm')]: {
            fontSize: theme.fontSizes.sm,
          },
          [theme.fn.largerThan('md')]: {
            fontSize: theme.fontSizes.md,
          },
          [theme.fn.largerThan('lg')]: {
            fontSize: theme.fontSizes.lg,
          },
          [theme.fn.largerThan('xl')]: {
            fontSize: theme.fontSizes.xl,
          },
        }),
        sx,
      ]}
      {...rest}
      component={component}
    >
      {children}
    </MantineText>
  );
};
