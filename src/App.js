import { Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-white text-gray-800">
      <Layout>
        <main className="pt-20">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
