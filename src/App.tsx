import React from 'react';

import styles from './styles.module.scss';

const LazyFirstComponent = React.lazy(
  async () => await import('./FirstComponent/FirstComponent')
);
const LazySecondComponent = React.lazy(
  () => import('./SecondComponent/SecondComponent')
);

export const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>loading</div>}>
        <LazyFirstComponent />
      </React.Suspense>
      <React.Suspense fallback={<div>loading</div>}>
        <LazySecondComponent />
      </React.Suspense>
      <p className={styles.text}>text</p>
    </div>
  );
};
