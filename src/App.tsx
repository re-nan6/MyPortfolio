import './App.css';
import IconWithName from './components/iconWithName';
import IconWithLang from './components/iconWithLang';

function App() {
  return (
    <div>
    <div className='contents-bg'>
      <div className='contents'>
        <div className='contents-de'>
          <div className='title'>
            PortFolio
          </div>
            <IconWithName name="Home"/>
        </div>
      </div>
    </div>
    <div className='section'>
      Skills
    </div>
    <div className='skillbox'>
    <div className='skills'>
    <IconWithLang name="HTML"/>
    <IconWithLang name="CSS"/>
    <IconWithLang name="JavaScript"/>
    <IconWithLang name="TypeScript"/>
    <IconWithLang name="React"/>
    <IconWithLang name="Vue"/>
    <IconWithLang name="jQuery"/>
    <IconWithLang name="Python"/>
    <IconWithLang name="Java"/>
    </div>
    </div>
    </div>
  );
}

export default App;
