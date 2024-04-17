import { useRef, useState } from 'react'

import { styled } from '@mui/system'
import copyIcon from '../../assets/icons/copy-icon.svg'
import confirmIcon from '../../assets/icons/confirm-icon.svg'

interface ContactLinkProps {
  logo: string,
  url: string,
  copiedLink: string | null,
  onCopyLink: (value: string) => void
}

type CopyStateIconProps = {
  isHoover: boolean
}

const LogoImage = styled('img')({
  width: '30px',
  height: '30px',
  marginRight: '10px'
})

const Link = styled('div')<CopyStateIconProps>(({ isHoover }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '15px',
  borderRadius: '4px',
  '& > .copyIcon': {
    visibility: isHoover ? 'visible' : 'hidden'
  }
}))

const Url = styled('p')({
  wordBreak: 'break-all',
  whiteSpace: 'normal',
  cursor: 'copy',
  margin: '0px'
})


const CopyStateIcon = styled('img')({
  width: '20px',
  marginLeft: '10px',
  filter: 'invert(1)',
})

export const ContactLink = ({ logo, url, copiedLink, onCopyLink }: ContactLinkProps) => {
  const urlRef = useRef<null | HTMLParagraphElement>(null)
  const [isMouseOverLink, setIsMouseOverLink] = useState(false)

  const copyContent = async () => {
    try {
      if (!urlRef.current?.textContent) {
        return
      }
      await navigator.clipboard.writeText(urlRef.current?.textContent)
      onCopyLink(urlRef.current?.textContent)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <Link
      isHoover={isMouseOverLink}
      onMouseOver={() => { setIsMouseOverLink(true) }}
      onMouseOut={() => setIsMouseOverLink(false)}>
      <LogoImage src={logo} />
      <Url ref={urlRef} onClick={copyContent}>{url}</Url>
      {
        copiedLink === url ?
          <CopyStateIcon src={confirmIcon} />
          :
          <CopyStateIcon className={'copyIcon'} src={copyIcon} />
      }
    </Link>
  )
}
