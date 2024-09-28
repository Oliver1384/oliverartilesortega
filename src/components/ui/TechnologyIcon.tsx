import { Tooltip } from '@mui/material'
import { styled } from '@mui/system'

const TechnologieIconStyle = styled('img')({
  maxWidth: '35px',
  maxHeight: '35px',
  marginRight: '10px',
  marginLeft: '10px'
})

interface TechnologieIconProps {
  imageUrl: string
  tooltipTitle: string
}

export const TechnologyIcon = ({ imageUrl, tooltipTitle }: TechnologieIconProps) => {
  return (
    <Tooltip title={tooltipTitle}>
      <TechnologieIconStyle src={imageUrl} />
    </Tooltip>
  )
}
