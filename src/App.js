import { Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-white text-gray-800">
      <Layout>
        <main className="pt-20">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
