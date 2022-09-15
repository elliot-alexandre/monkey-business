import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { Container } from '../components/templates';
import { vars } from '../theme/theme.css';
import { themeDark } from '../theme/themeDark.css';
import { themeLight } from '../theme/themeLight.css';
require('../styles/global-reset.css');

function MyApp({ Component, pageProps, ...props }: any) {
  const baseUrl =
    typeof window !== 'undefined'
      ? window?.location?.protocol +
        '//' +
        window?.location?.hostname +
        (window?.location?.port ? ':' + window?.location?.port : '')
      : undefined;

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          type: 'website',
          title: '',
          description: '',
          url: baseUrl,
        }}
      />
      <div className={isDarkTheme ? themeDark : themeLight} id="app">
        <Container
          style={{
            background: vars.color.primary,
            height: '100vh',
            padding: '24px',
          }}
        >
          <button
            style={{
              background: vars.text.color.inversed,
              position: 'absolute',
              right: '24px',
              top: '24px',
              padding: '10px',
            }}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Change Theme
          </button>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  );
}

export default MyApp;
