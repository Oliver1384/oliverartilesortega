
import { styled } from '@mui/system'
import { TEXT_COLORS } from '../../colors'

const SecondaryParagraph = styled('p')({
  color: TEXT_COLORS.secondary,
  padding: '1rem',
  fontSize: '1rem'
})

interface SecondaryTextProps {
  text: string
}

export const SecondaryText = ({ text }: SecondaryTextProps) => {
  return (
    <SecondaryParagraph>
      {text}
    </SecondaryParagraph>
  )
}
