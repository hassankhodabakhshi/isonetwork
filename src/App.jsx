import { useState } from 'react'
import userAvatar from './assets/80225351.png'
import mail from './assets/mail-142.svg'
import './App.css'
import  Footer  from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="main-card">
        <div class="card w317">
            <div>
              <img src={userAvatar} className="avatar" alt="React logo" />
            </div>
            <div>
              <h2 className="name">hassan khodabakhshi</h2>
              <h3 className="designation">Site designer</h3>
              <h4 className="website"><a href="https://isonetwork.ir/" target="_blank">isonetwork.ir</a></h4>
              <button><a href="mailto:hasankhodabakhshi@gmail.com"><img src={mail} className="emailIcon" /><span class="btntext">Email</span></a></button>
              <h2 class="remove-space">About</h2>
              <p>I am a web designer and a computer technician, and I am interested in developing websites.</p>
              <h2 class="remove-space">Interests</h2>
              <p class="remove-space">Food expert. Music scholar. Reader. Programming. [Copied]</p>
            </div>
            <Footer />
          </div>
      </section>
    </div>
  )
}

export default App
