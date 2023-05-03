import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import Header from './components/Header';
import Footer from './components/Footer';

const App = memo(() => {
  return (
    <section>
      <Header />
      <div className="content">
        {useRoutes(routes)}
      </div>
      <Footer />
    </section>
  );
});

export default App;
