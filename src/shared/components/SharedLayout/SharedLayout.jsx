import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Container from '../Container/Container';
import { Section } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SharedLayout;
