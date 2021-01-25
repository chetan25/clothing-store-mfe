import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from './error-boundary/error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle  } from 'styled-components';
import Header from './header/header';
import ShopPage from './pages/shop/shop';

//@ts-ignore
import recoilPersist from 'recoil-persist'

const { RecoilPersist, updateState } = recoilPersist(
  ['cartItems'], // configurate that atoms will be stored (if empty then all atoms will be stored),
    {
        key: 'recoil-persist', // this key is using to store data in local storage
        storage: localStorage // configurate which stroage will be used to store the data
    }
)

const Directory = lazy(() => import("ProductApp/Directory"));
const CheckoutPage = lazy(() => import("CheckoutApp/CheckoutPage"));


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

const App = () => {
    return (
      <ErrorBoundary>
        <Suspense  fallback="Loading Todo">
        <GlobalStyle />
        <Header/>
        <Switch>
            <Suspense fallback={<h2>Loading</h2>}>
                <Route exact path='/' component={Directory}/>
                <Route path='/shop' component={ShopPage} />
                {/* <Route path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignOutPage/>)}/>
                */}
                 <Route path='/checkout' component={CheckoutPage}/>
            </Suspense>
        </Switch>
      </Suspense>
      </ErrorBoundary>
    )
};

ReactDOM.render(
    <BrowserRouter>
      <RecoilRoot initializeState={({set}) => { updateState({set}) }}>
        <RecoilPersist />
        <App />
      </RecoilRoot>
    </BrowserRouter>,
    document.getElementById("root")
);
