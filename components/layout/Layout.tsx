import {
  completeNavigationProgress,
  NavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && startNavigationProgress();
    const handleComplete = () => completeNavigationProgress();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <>
      <NavigationProgress autoReset={true} progressLabel='progressbar' />
      <main>{children}</main>
    </>
  );
};

export default Layout;
