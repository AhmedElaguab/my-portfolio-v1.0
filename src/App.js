import { Layout } from './components/Layout';
import { Intro } from './components/Intro';

function App() {
  return (
    <div className="min-h-screen bg-gray-white text-gray-800">
      <Layout>
        <main className="pt-20">
          <Intro />
        </main>
      </Layout>
    </div>
  );
}

export default App;
