import { useTranslation } from 'react-i18next';
import { Link } from './ui/Link.tsx';
import { Article } from './ui/Article.tsx';

export const Certificates = () => {
  const { t } = useTranslation();

  return (
    <Article title={t('certificates.title')}>
      <Link href={'certificates/redux-saga-react.pdf'} target={'_blank'}>
        {t('certificates.reduxSagaReact')}
      </Link>
      <br />
      <Link href={'certificates/asincrona-promesas-javascript.pdf'} target={'_blank'}>
        {t('certificates.asyncJavascript')}
      </Link>
      <br />
      <Link href={'certificates/clean-code.pdf'} target={'_blank'}>
        {t('certificates.cleanCode')}
      </Link>
      <br />
      <Link href={'certificates/javascript-avanzado.pdf'} target={'_blank'}>
        {t('certificates.advancedJavascript')}
      </Link>
      <br />
      <Link href={'certificates/manipulacion-DOM-javascript.pdf'} target={'_blank'}>
        {t('certificates.domManipulation')}
      </Link>
      <br />
      <Link href={'certificates/metodologias-agiles.pdf'} target={'_blank'}>
        {t('certificates.agileMethodologies')}
      </Link>
      <br />
      <Link href={'certificates/agile-uml.pdf'} target={'_blank'}>
        {t('certificates.agileUml')}
      </Link>
      <br />
      <Link href={'certificates/SCRUM.pdf'} target={'_blank'}>
        {t('certificates.scrum')}
      </Link>
    </Article>
  );
};
