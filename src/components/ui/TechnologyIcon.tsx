import { Tooltip } from '@mui/material';
import { styled } from '@mui/system';

const TechnologieIconStyle = styled('img')({
  maxWidth: '35px',
  maxHeight: '35px',
  marginRight: '10px',
  marginLeft: '10px',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.3)',
  }
});

interface TechnologieIconProps {
  imageUrl: string;
  tooltipTitle: string;
}

export const TechnologyIcon = ({ imageUrl, tooltipTitle }: TechnologieIconProps) => {
  return (
    <Tooltip title={tooltipTitle}>
      <TechnologieIconStyle src={imageUrl} />
    </Tooltip>
  );
};
