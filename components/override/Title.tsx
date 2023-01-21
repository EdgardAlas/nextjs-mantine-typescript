import {
  Sx,
  Title as MantineTitle,
  TitleProps,
  useMantineTheme,
} from '@mantine/core';
import { ReactNode } from 'react';
import { Headings } from '../../theme';

interface Props extends TitleProps {
  children: ReactNode;
  sx?: Sx;
  titleStyle?: Headings;
}

export const Title = ({
  children,
  sx,
  order = 1,
  titleStyle,
  ...rest
}: Props) => {
  const heading: Headings = `h${order}` as Headings;
  const theme = useMantineTheme();

  const title =
    titleStyle !== undefined
      ? theme.other.headingFontSizes[titleStyle]
      : theme.other.headingFontSizes[heading];

  return (
    <MantineTitle
      sx={[
        (theme) => ({
          fontSize: title.xs,
          fontFamily: theme.headings.fontFamily,

          [theme.fn.largerThan('md')]: {
            fontSize: title.md,
          },

          [theme.fn.largerThan('lg')]: {
            fontSize: title.lg,
          },
        }),
        sx,
      ]}
      order={order}
      {...rest}
    >
      {children}
    </MantineTitle>
  );
};
