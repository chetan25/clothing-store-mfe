import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './error-boundary/error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle  } from 'styled-components';
import Header from './header/header';

import { fetchCollectionAsync } from './fetchData';

const Directory = lazy(() => import("ProductApp/Directory"));


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
  * {
    box-sizing: border-box;
  }
  @media (min-width: 1025px) {
    body {
    padding: 20px 60px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ShopPage = ({match}: {match: {path: string}}) => {
  console.log(match, 'match');
  useEffect(() => {
      const load = async() => {
         await fetchCollectionAsync();
      };

      load();
  });

  return (
      <div className='shop-page'>
          <h2>Test is on</h2>
      </div>
  );
};


const App = () => {
    return (
      <ErrorBoundary>
        <Suspense  fallback="Loading Todo">
        <GlobalStyle />
        <Header/>
        <Switch>
            <Suspense fallback={<h2>Loading</h2>}>
                <Route exact path='/' component={Directory}/>
                <Route exact path='/shop' component={ShopPage} />
                {/* <Route path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignOutPage/>)}/>
                <Route path='/checkout' component={CheckOutPage}/> */}
            </Suspense>
        </Switch>
      </Suspense>
      </ErrorBoundary>
    )
};

ReactDOM.render(
    <BrowserRouter><RecoilRoot><App /></RecoilRoot></BrowserRouter>,
    document.getElementById("root")
);
