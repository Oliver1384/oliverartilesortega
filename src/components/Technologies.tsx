import { useTranslation } from 'react-i18next';
import rustLogo from '../assets/logos/rust-logo.png';
import typescriptLogo from '../assets/logos/typescript-logo.png';
import phpLogo from '../assets/logos/php-logo.png';
import javaLogo from '../assets/logos/java-logo.png';
import sqlLogo from '../assets/logos/sql-logo.png';
import javascriptLogo from '../assets/logos/javascript-logo.png';
import cssLogo from '../assets/logos/css-logo.png';
import htmlLogo from '../assets/logos/html-logo.png';
import { Article } from './ui/Article';
import { Section } from './ui/Section';
import { SecondaryText } from './ui/SecondaryText';

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Article image={rustLogo} title={t('technologies.rust.title')}>
        <p>{t('technologies.rust.description')}</p>
      </Article>
      <Article image={phpLogo} title={t('technologies.php.title')}>
        <p>{t('technologies.php.description')}</p>
        <SecondaryText text={t('technologies.php.note')} />
      </Article>
      <Article image={javaLogo} title={t('technologies.java.title')}>
        <p>{t('technologies.java.description')}</p>
      </Article>
      <Article title={t('technologies.sql.title')} image={sqlLogo}>
        <p>{t('technologies.sql.description')}</p>
      </Article>
      <Article image={cssLogo} title={t('technologies.css.title')}>
        <p>{t('technologies.css.description')}</p>
        <SecondaryText text={t('technologies.css.note')} />
      </Article>
      <Article image={htmlLogo} title={t('technologies.html.title')}>
        <p>{t('technologies.html.description')}</p>
      </Article>
      <Article image={typescriptLogo} title={t('technologies.typescript.title')}>
        <p>{t('technologies.typescript.description')}</p>
      </Article>
      <Article image={javascriptLogo} title={t('technologies.javascript.title')}>
        <p>{t('technologies.javascript.description')}</p>
        <SecondaryText text={t('technologies.javascript.note')} />
      </Article>
      <Article title={t('technologies.other.title')}>
        <p>{t('technologies.other.description')}</p>
        <SecondaryText text={t('technologies.other.note')} />
      </Article>
    </Section>
  );
};
