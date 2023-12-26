'use client'
import Script from 'next/script'

export const Google = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-L0Y4E4NE4K' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-L0Y4E4NE4K');
      `}
      </Script>
    </>
  )
}
