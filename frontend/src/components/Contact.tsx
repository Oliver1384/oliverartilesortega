import { useState } from 'react'
import { styled } from '@mui/system'

import { Section } from './ui/Section.tsx'
import { Article } from './ui/Article.tsx'
import { ContactLink } from './ui/ContactLink.tsx'
import linkedinLogo from '../assets/linkedin-logo.png'
import githubLogo from '../assets/github-logo.png'
import gmailLogo from '../assets/gmail-logo.png'
import codewarsLogo from '../assets/codewars-log.png'

const LinksContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

export const Contact = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  return (
    <Section>
      <Article title={'Información de contacto'}>
        <LinksContainer>
          <ContactLink 
            logo={linkedinLogo} 
            url={'https://www.linkedin.com/in/oliver-artiles-ortega-8a9180226'} 
            copiedLink={copiedLink}
            onCopyLink={setCopiedLink}/>
          <ContactLink 
            logo={githubLogo}
            url={'https://github.com/Oliver1384'}
            copiedLink={copiedLink}
            onCopyLink={setCopiedLink}/>
          <ContactLink 
            logo={gmailLogo} 
            url={'oliveartiless@gmail.com'}
            copiedLink={copiedLink}
            onCopyLink={setCopiedLink}/>
          <ContactLink 
            logo={codewarsLogo}
            url={'https://www.codewars.com/users/oliver1384'}
            copiedLink={copiedLink}
            onCopyLink={setCopiedLink}/>
        </LinksContainer>
      </Article>
    </Section>
  )
}
