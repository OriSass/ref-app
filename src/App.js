import React, { Suspense, lazy } from 'react';
import  Header from './components/Header';
import  ErrorBoundary from './components/ErrorBoundary';
import './App.css';
const Comments = lazy(() => import('./components/Comments'));
const Content = lazy(() => import('./components/Content'));

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<h1>Still loadingggggggggggggggggggggggggg</h1>}>
        <Content />
        <Comments />
      </Suspense>
    </ErrorBoundary>
    </div>
  );
}

export default App;
