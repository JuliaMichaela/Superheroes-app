import './style/App.css';
import Hero from './components/Hero';
import heroes from './heroes.json';

function App() {
  return (
    <div className='heroes-container'>
      {heroes.map((hero, index) => (
        <Hero name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
          key={index} />
      ))}
    </div>
  )
}

export default App
