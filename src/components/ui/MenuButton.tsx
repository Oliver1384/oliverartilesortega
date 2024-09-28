import { Button } from '@mui/material'
import { PRIMARY_COLORS } from '../../colors'

interface MenuButtonProps {
  text: string
  isSelected: boolean
  onClick: () => void
}

export const MenuButton = ({ text, onClick, isSelected }: MenuButtonProps) => {
  return (
    <Button variant={'contained'} sx={{
      '&.MuiButton-root': {
        backgroundColor: isSelected ? PRIMARY_COLORS.element : PRIMARY_COLORS.pageBackground,
        color: PRIMARY_COLORS.section
      },
      '&.MuiButton-root:hover': {
        backgroundColor: PRIMARY_COLORS.element,
        color:isSelected ? PRIMARY_COLORS.section : 'white' 
      },
      fontFamily: 'GeistMonoSemiBold'

    }}
      onClick={onClick}>
      {text}
    </Button>
  )
}

