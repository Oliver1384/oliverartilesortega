import { Article } from './ui/Article'
import { Section } from './ui/Section'
import rustIcon from '../assets/icons/technologies/rust-icon.svg'
import typescriptIcon from '../assets/icons/technologies/typescript-icon.svg'
import javascriptIcon from '../assets/icons/technologies/javascript-icon.svg'
import viteIcon from '../assets/icons/technologies/vite-icon.svg'
import phpIcon from '../assets/icons/technologies/php-icon.svg'
import laravelIcon from '../assets/icons/technologies/laravel-icon.svg'
import { TechnologyIcon } from './ui/TechnologyIcon'

export const Projects = () => {
  return (
    <Section>
      <Article title={'CTPhoneWeb'} >
        <p>
          Software utilizado como herramienta de call center para la gestión y atención de las llamadas.
        </p>
        <p>
          Permite recibir y realizar llamadas, ponerlas en pausa, rebotar a otro servicio, hablar por chat, conectarse y desconectarse de diferentes colas
          de llamadas dependiendo del servicio que se quiera prestar. Dispone de un servicio de mensajería interno, para que los agentes puedan comunicarse entre sí.
          Contiene un sistema para gestionar las pausas del operador.
          Tiene incorporadas herramientas para que los supervisores puedan monitorear y controlar el servicio hacia los clientes y los
          tiempos de trabajo y calidad de la atención de los operadores.
        </p>
        <p>
          En constante evolución, se adapta a las necesidades de los distintos clientes, tales como 012, Binter, CanaryFly, entre otros.
        </p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Rust'} imageUrl={rustIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Vite'} imageUrl={viteIcon} />
        </div>
      </Article>
      <Article title={'Videoconferencia 012'} >
        <p>
          Servicio que permite realizar gestiones del 012 Canarias por videollamada.
        </p>
        <p>
          Se compone de dos partes, un nuevo módulo acoplado al CTPhoneWeb, proyecto mencionado con anterioridad, desde donde también se crean y gestionan
          los horarios y número de huecos disponibles para reservar. Y una página web para que los ciudadanos puedan reservar, cancelar,
          consultar y unirse a una videollamada con un operador.
        </p>
        <p>
          Se notifica a los ciudadanos de las citas mediante correo, SMS o Whatsapp.
          Cuenta con chat con la posibilidad de subir archivos, fondos virtuales para las webcams, compartir pantalla, entre otras características.
        </p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Rust'} imageUrl={rustIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Vite'} imageUrl={viteIcon} />
        </div>
      </Article>
      <Article title={'Project Fitness'} >
        <p>
          Aplicación para poner en contacto entrenadores personales con clientes. Hecho junto a otros tres compañeros de clase como proyecto
          de final de curso.
        </p>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'PHP'} imageUrl={phpIcon} />
          <TechnologyIcon tooltipTitle={'Laravel'} imageUrl={laravelIcon} />
        </div>
      </Article>
      <Article title={'Aplicación para NOCN Group'} >
        <p>
          Este proyecto lo realicé durante mi periodo de prácticas en empresa, junto a otros cuatro compañeros.
        </p>
        <p>
          Pensada para ser utilizada principalmente en dispositivos móviles, permite al usuario hacer una foto de una maquinaria
          de construcción que requiera de un conductor y analizarla para informar del permiso de circulación requerido y centros de
          formación cercanos donde obtenerlos.
        </p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
        </div>
      </Article>
    </Section>
  )
}
