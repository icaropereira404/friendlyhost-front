import './style.css'
import Homeicon from '../../../assets/house.svg'

const Homepage = () => {
    return (
        <div className="container">
            <section className="homepage">
                <div className='left'>
                    <h1>
                    sua casa fora de casa.
                        </h1>
                    <p>Seja bem-vindo(a) à Friendly Host, a plataforma que conecta
                    estudantes a famílias dispostas a fornecer moradia temporária em
                    grandes centros. Estamos muito felizes em tê-lo(a) aqui!</p>          
                </div>
                <div className='right'>
                    <img src={Homeicon} alt="Icone House" />
                </div>
            </section>
                
        </div>
    )
}

export default Homepage;