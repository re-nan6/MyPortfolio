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
          <div>
            <IconWithName name="Home"/>
          </div>
        </div>
      </div>
    </div>
    <div className='skills'>
      Skills
    </div>
    <div>
    <IconWithLang/>
    </div>
    </div>
  );
}

export default App;
