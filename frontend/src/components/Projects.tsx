import { Article } from './ui/Article'
import { Section } from './ui/Section'

export const Projects = () => {
  return (
    <Section>
      <Article title={'CTPhoneWeb'} >
        Software utilizado como herramienta de call center para la gestión y atención de las llamadas. En constante evolución, 
        se adapta a las necesidades de los distintos clientes, tales como 012, Hospitales San Roque, Binter, CanaryFly, entre otros.
      </Article>
      <Article title={'Project Fitness'} >
        Aplicación para poner en contacto entrenadores personales con clientes.
      </Article>
      <Article title={'Videoconferencia 012'} >
        Servicio que permite realizar gestiones del 012 Canarias por videollamada.
        Se compone de dos partes, un nuevo módulo acoplado al CTPhoneWeb, proyecto mencionado con anterioridad. 
        Y una página web para que los ciudadanos puedan reservar, cancelar, consultar y unirse a una videollamada con un operador.
        Cuenta con chat con la posibilidad de subir archivos, fondos virtuales para las webcams, compartir pantalla, entre otras 
        características.
      </Article>
      <Article title={'Aplicación para NOCN Group'} >
        Pensada para ser utilizada principalmente en dispositivos móviles, permite al usuario hacer una foto de una máquinaria 
        de construcción que requiera de un conductor y analizarla para informar del permiso de circulacíon requerido y centros de 
        formación cercanos donde obtenerlos.
      </Article>
    </Section>
  )
}
