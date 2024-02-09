import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
library.add(faBorderAll, faList);

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/hybrid.css';
import '@/styles/index.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
