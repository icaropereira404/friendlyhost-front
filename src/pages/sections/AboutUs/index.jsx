import { Fragment } from 'react'
import '../AboutUs/style.css'
import Image from '../../../assets/quemsomos.svg'

const AboutUs = () => {
    return (
        <Fragment>

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
            <section className='valores'>
                    <h1>
                        nossos valores
                    </h1>
                    <p>Na Friendly Host, nossos valores são a base de tudo o que fazemos.
                        Acreditamos em promover um mundo mais igualitário, justo e
                        compassivo, e nossos valores refletem essa crença. Aqui estão alguns
                        dos valores que são mais importantes para nós:</p>
            </section>
        </Fragment>
    )
}

export default AboutUs
