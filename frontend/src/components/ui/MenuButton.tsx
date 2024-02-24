import { Button } from '@mui/material'
import { PRIMARY_COLORS } from '../../colors'

interface MenuButtonProps {
  text: string
  onClick: () => void
}

export const MenuButton = ({ text, onClick }: MenuButtonProps) => {
  return (
    <Button variant={'contained'} sx={{
      '&.MuiButton-root': {
        backgroundColor: PRIMARY_COLORS.pageBackground,
        color: PRIMARY_COLORS.section
      },
      '&.MuiButton-root:hover': {
        backgroundColor: PRIMARY_COLORS.element,
        color: 'white'
      },
      fontFamily: 'GeistMonoSemiBold'
    }}
      onClick={onClick}>
      {text}
    </Button>
  )
}

