import './App.css';
import 'animate.css';
import { ProvideAuth } from '@navigation/Auth/ProvideAuth';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from '@navigation/RouterConfig';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { Notification } from '@components/Notification';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ProvideAuth>
          <BrowserRouter>
            <Notification />
            <RouterConfig />
          </BrowserRouter>
        </ProvideAuth>
      </Provider>
    </div>
  );
}

export default App;
