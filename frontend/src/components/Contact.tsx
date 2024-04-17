import { useState } from 'react'
import { styled } from '@mui/system'

import { Article } from './ui/Article.tsx'
import { ContactLink } from './ui/ContactLink.tsx'
import linkedinLogo from '../assets/linkedin-logo.png'
import githubLogo from '../assets/github-logo.png'
import gmailLogo from '../assets/gmail-logo.png'
import codewarsLogo from '../assets/codewars-log.png'
import downloadIcon from '../assets/icons/download-icon.svg'
import { PRIMARY_COLORS } from '../colors.ts'

const LinksContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '50px'
})

const DownloadCVButton = styled('button')({
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  backgroundColor: PRIMARY_COLORS.pageBackground,
  color: PRIMARY_COLORS.section,
  fontFamily: 'GeistMonoSemiBold',
  fontSize: '15px',
  '&:active': {
    backgroundColor: PRIMARY_COLORS.element,
    color: 'white'
  },
  '&:active > img': {
    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)'
  }
})

const DownloadIcon = styled('img')({
  width: '25px',
  height: '25px',
  marginRight: '5px',
})

export const Contact = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  return (
    <Article title={'Información de contacto'}>
      <LinksContainer>
        <ContactLink
          logo={linkedinLogo}
          url={'https://www.linkedin.com/in/oliver-artiles-ortega-8a9180226'}
          copiedLink={copiedLink}
          onCopyLink={setCopiedLink} />
        <ContactLink
          logo={githubLogo}
          url={'https://github.com/Oliver1384'}
          copiedLink={copiedLink}
          onCopyLink={setCopiedLink} />
        <ContactLink
          logo={gmailLogo}
          url={'oliveartiless@gmail.com'}
          copiedLink={copiedLink}
          onCopyLink={setCopiedLink} />
        <ContactLink
          logo={codewarsLogo}
          url={'https://www.codewars.com/users/oliver1384'}
          copiedLink={copiedLink}
          onCopyLink={setCopiedLink} />
      </LinksContainer>
      <a href={'curriculum.pdf'} download={'curriculum-oliver-artiles-ortega.pdf'}>
        <DownloadCVButton>
          <DownloadIcon src={downloadIcon} />
          Descargar CV
        </DownloadCVButton>
      </a>
    </Article>
  )
}
