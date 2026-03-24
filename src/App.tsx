import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#060608] selection:bg-zinc-800 text-zinc-300 antialiased">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
