import { useTranslation } from 'react-i18next'
import { Article } from './ui/Article'
import { Section } from './ui/Section'
import { Resources} from './Resources'

export const Tools = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Article title={t('tools.editors.title')}>
        <p>{t('tools.editors.description')}</p>
      </Article>

      <Article title={t('tools.operatingSystem.title')}>
        <p>{t('tools.operatingSystem.description')}</p>
      </Article>
      <Article title={t('tools.otherApps.title')}>
        <p>{t('tools.otherApps.description')}</p>

        <p>{t('tools.otherApps.description2')}</p>
        <p>{t('tools.otherApps.description3')}</p>
      </Article>

      <Article title={t('tools.methodologies.title')}>
        <p>{t('tools.methodologies.description')}</p>
      </Article>
      <Article title={t('tools.hardware.title')}>
        <p>{t('tools.hardware.description')}</p>
      </Article>
      <Article title={t('tools.booksAndDocs.title')}>
        <p>{t('tools.booksAndDocs.description')}</p>
        <Resources/>
      </Article>
    </Section>
  )
}
