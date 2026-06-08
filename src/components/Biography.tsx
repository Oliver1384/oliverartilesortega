import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

import { Contact } from './Contact';
import { Section } from './ui/Section';
import { Article } from './ui/Article';
import { SecondaryTitle } from './ui/SecondaryTitle';
import { Certificates } from './Certificates';

const ProfileImage = styled('img')({
  borderRadius: '50%',
  maxWidth: '250px',
  order: '1',
  margin: '0 auto',
  '@media(min-width:790px)': {
    float: 'right',
    margin: '8px',
    order: 'inherit',
  },
});

export const Biography = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Article title={t('biography.title')}>
        <ProfileImage src={'../profile.jpg'} />
        <SecondaryTitle>{t('biography.subtitle')}</SecondaryTitle>
        <p>{t('biography.p1')}</p>
        <p>{t('biography.p2')}</p>
        <p>{t('biography.p3')}</p>
      </Article>
      <Contact />
      <Certificates />
    </Section>
  );
};
