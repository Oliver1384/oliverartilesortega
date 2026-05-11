import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <Section>
      <Article title={t('projects.ctPhoneWeb.title')} >
        <p>{t('projects.ctPhoneWeb.description')}</p>
        <p>{t('projects.ctPhoneWeb.description2')}</p>
        <p>{t('projects.ctPhoneWeb.description3')}</p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Rust'} imageUrl={rustIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Vite'} imageUrl={viteIcon} />
        </div>
      </Article>
      <Article title={t('projects.videoconferencia012.title')} >
        <p>{t('projects.videoconferencia012.description')}</p>
        <p>{t('projects.videoconferencia012.description2')}</p>
        <p>{t('projects.videoconferencia012.description3')}</p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Rust'} imageUrl={rustIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Vite'} imageUrl={viteIcon} />
        </div>
      </Article>
      <Article title={t('projects.projectFitness.title')} >
        <p>{t('projects.projectFitness.description')}</p>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'PHP'} imageUrl={phpIcon} />
          <TechnologyIcon tooltipTitle={'Laravel'} imageUrl={laravelIcon} />
        </div>
      </Article>
      <Article title={t('projects.nocnGroup.title')} >
        <p>{t('projects.nocnGroup.description')}</p>
        <p>{t('projects.nocnGroup.description2')}</p>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <TechnologyIcon tooltipTitle={'Javascript'} imageUrl={javascriptIcon} />
          <TechnologyIcon tooltipTitle={'Typescript'} imageUrl={typescriptIcon} />
        </div>
      </Article>
    </Section>
  )
}
