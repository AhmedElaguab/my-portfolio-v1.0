import { Header } from './components/Header';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="min-h-screen bg-gray-white text-gray-800">
      <Layout>
        <section className="pt-20">
          <h1>Hello world!</h1>
        </section>
      </Layout>
    </div>
  );
}

export default App;
