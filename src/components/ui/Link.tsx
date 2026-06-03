import { styled } from '@mui/system';

export const Link = styled('a')({
  color: 'white',
  textDecoration: 'underline',
  '&:hover': {
    color: '#d8f1eb',
  },
  transition: 'color 0.3s ease',
});
