import React,{ Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.js'
import store from './src/app/store.js'
import './index.css'
import { Provider } from 'react-redux'
import LoadingContent from './src/containers/LoadingContent.js';
import Loading from './src/features/common/components/Loading.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Suspense fallback={<LoadingContent />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
    // <React.StrictMode>
      // <BrowserRouter>
      //   <App />
      // </BrowserRouter>
    // </React.StrictMode>,
  );
}
