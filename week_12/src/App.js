import './App.css';
import Header from './Header';
import MainVisual from './MainVisual';
import Intro from './Section01';
import Grid from './Section02';
import Popular from './Section03';


function App() {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <Intro />
        <Grid />
        <Popular />
      </main>
    </>
  );
}

export default App;
