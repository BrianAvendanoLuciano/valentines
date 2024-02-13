import './App.css'
import Daisy from './components/daisy'
import { Link } from 'react-router-dom'
import Carpel from './components/daisy/Carpel'
import Petal from './components/daisy/Petal'

function App() {

  return (
    <>
      <section>
        <div className="message flower">
          <h1>Flowers for you</h1>
        </div>
        <div className="message greetings">
          <p>Happy Valentines My Love</p>
        </div>
        <div className='letter'>
          <Link className="message letter-link" to="/quiz-bro">
            <h1>Letter</h1>
          </Link>
        </div>
      </section>
      

      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower surprise-flower">
        <Daisy />
      </div>
      <div className="daisy-flower">
        <Daisy />
      </div>
    </>
  )
}

export default App
