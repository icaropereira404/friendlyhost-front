import { Fragment } from 'react'
import '../AboutUs/style.css'
import Image from '../../../assets/quemsomos.svg'
import Border from '../../../assets/border.png'

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
                <img className='border-right' src={Border} alt="border-right" />
                <h1>
                    nossos valores:
                </h1>
                <p className='text-info'>Na Friendly Host, nossos valores são a base de tudo o que fazemos.
                    Acreditamos em promover um mundo mais igualitário, justo e
                    compassivo, e nossos valores refletem essa crença. Aqui estão alguns
                    dos valores que são mais importantes para nós:</p>
                <div className='info'>
                    <div className='info-content'>
                        
                        <span className='number'>1</span>
                        <p>Inclusão: acreditamos que todos
                            devem ter acesso à educação,
                            independentemente de sua
                            origem étnica, religião, idade,
                            gênero ou orientação sexual. Nós
                            nos esforçamos para criar um
                            ambiente acolhedor e inclusivo
                            para todos os estudantes que
                            usam nossa plataforma.</p>
                    </div>
                    <div className='info-content'>
                        <span className='number'>2</span>
                        <p>Respeito: valorizamos o
                            respeito mútuo e a
                            dignidade humana.
                            Respeitamos as
                            diferenças de opinião, a
                            diversidade cultural e a
                            individualidade de cada
                            pessoa.</p>
                    </div>
                    <div className='info-content'>
                        <span className='number'>3</span>
                        <p>
                            Excelência: nos esforçamos para
                            oferecer a melhor qualidade de
                            serviço possível, desde a seleção
                            cuidadosa de nossas famílias
                            hospedeiras até o suporte ao cliente
                            excepcional.
                        </p>
                    </div>
                    <div className='info-content'>
                        <span className='number'>4</span>
                        <p>
                            Transparência:
                            acreditamos na
                            transparência em
                            todas as nossas
                            operações e na
                            comunicação aberta
                            e honesta com
                            nossos usuários.
                        </p>
                    </div>
                    <div className='info-content'>
                        <span className='number'>5</span>
                        <p>
                            Empatia: acreditamos que a
                            empatia é fundamental para
                            criar conexões significativas e
                            promover a compaixão. Nós
                            nos esforçamos para ser
                            compreensivos e compassivos
                            com todos que usam nossa
                            plataforma.
                        </p>
                    </div>
                    <div className='info-content'>
                        <span className='number'>6</span>
                        <p>
                            Ética: agimos com
                            integridade e ética
                            em todas as nossas
                            atividades
                            comerciais, e
                            esperamos o mesmo
                            dos nossos usuários
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutUs
