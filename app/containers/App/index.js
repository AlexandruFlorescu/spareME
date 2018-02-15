/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
  box-shadow: 0.1px 1px 2px 1px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function App() {
  return (
    <div>
      <AppWrapper>
      <Helmet
        titleTemplate="%s - SpareMe"
        defaultTitle="SpareMe"
      >
        <meta name="description" content="An application that allows you to donate your change" />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </ContentWrapper>

    </AppWrapper>
    </div>
  );
}
