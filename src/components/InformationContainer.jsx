import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id='phone-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>(31) 99672-9996</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>vitorlucasdev@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Contagem / MG</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer
