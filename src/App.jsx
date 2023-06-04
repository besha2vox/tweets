import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'shared/components/SharedLayout/';
import HomePage from 'pages/HomePage';

const App = () => {
  const TweetsPage = lazy(() => import('pages/TweetsPage'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
