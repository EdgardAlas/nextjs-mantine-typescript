import { MantineTheme } from '@/theme';
import { MantineProvider } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
      {children}
    </MantineProvider>
  );
};
