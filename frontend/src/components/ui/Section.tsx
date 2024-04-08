import { styled } from '@mui/system'
import { TEXT_COLORS } from '../../colors'

export const Section = styled('section')({
  color: TEXT_COLORS.primary,
  height: 'fit-content',
  fontSize: '18px',
  fontWeight: '400',
  marginTop: '1rem',
  fontFamily: 'GeistMonoRegular',
  '@media(min-width: 1024px)': {
    margin: '2rem',
  }
})
