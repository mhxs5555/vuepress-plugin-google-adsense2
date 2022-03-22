import { defineClientAppEnhance } from '@vuepress/client';

declare global {
  interface Window {
    adsbygoogle?: {
      loaded: boolean;
      push: (...args: any[]) => any;
    };
  }
}

declare const ADS_ID: string;

export default defineClientAppEnhance(() => {
  if (!ADS_ID) return;

  // avoid duplicated import
  if (window.adsbygoogle) {
    return;
  }
  // insert ads `<script>` tag
  const adsScript = document.createElement('script');
  adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  adsScript.async = true;
  adsScript.setAttribute('data-ad-client', ADS_ID);
  document.head.appendChild(adsScript);
});
