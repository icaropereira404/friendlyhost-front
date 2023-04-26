import './style.css'
import Homeicon from '../../assets/house.svg'

const Homepage = () => {
    return (
        <div className="container">
            <section className="homepage">
                <div className='left'>
                    <h1>
                        LANDING PAGE
                        </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque, explicabo eius laudantium fugit earum ratione delectus at laborum. Suscipit neque reiciendis facilis molestiae quo provident assumenda consequatur modi non.</p>          
                </div>
                <div className='right'>
                    <img src={Homeicon} alt="Icone House" />
                </div>
            </section>
                
        </div>
    )
}

export default Homepage;