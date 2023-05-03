import { Fragment } from 'react'
import '../AboutUs/style.css'
import Image from '../../../assets/quemsomos.svg'

const AboutUs = () => {
    return (
        <div className="container">
            <section className="content">
                <div className='left'>
                    <h1>
                        quem somos?
                    </h1>
                    <p>Somos uma equipe de profissionais comprometidos em
                        tornar a educação acessível a todos,
                        independentemente de onde vivem ou de sua situação
                        financeira. Nós acreditamos que todos merecem a
                        oportunidade de aprender e crescer, e é por isso que
                        criamos uma plataforma única que conecta estudantes a
                        famílias dispostas a fornecer moradia temporária sem
                        custos em grandes centros.</p>
                </div>
                <div className='right'>
                    <img src={Image} alt="Icone House" />
                </div>
            </section>

        </div>
    )
}

export default AboutUs
