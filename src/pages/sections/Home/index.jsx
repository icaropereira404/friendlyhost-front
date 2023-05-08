import './style.css'
import Homeicon from '../../../assets/house.svg'

const Homepage = () => {
    return (
        <div className="container">
            <section className="content">
                <div className='left'>
                    <h1>
                    Cadastre o seu Email Para <span className='blue'>Receber Novidades !!</span>
                    </h1>
                    <p>Seja bem-vindo(a) à Friendly Host, a plataforma que conecta
                    estudantes a famílias dispostas a fornecer moradia temporária em
                    grandes centros. Estamos muito felizes em tê-lo(a) aqui!</p>        
                <form id='formInput' action="">
                
                <input className='input' type="text" placeholder='Insira seu Nome'/>
                <input className='input' type="text" placeholder='Insira seu E-mail'/>
                <button className='btn' type='submit'>Enviar</button>
                </form>
                </div>
                <div className='right'>
                    <img src={Homeicon} alt="Icone House" />
                </div>
            </section>
            
        </div>
    )
}

export default Homepage;