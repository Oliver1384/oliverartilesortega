import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PRIMARY_COLORS } from '../../colors';

const ScrollButton = styled('div')<{ isVisible: boolean }>(({ isVisible }) => ({
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: PRIMARY_COLORS.pageBackground,
  color: '#ffffff',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  zIndex: 1000,
  cursor: 'pointer',
  opacity: isVisible ? 1 : 0,
  visibility: isVisible ? 'visible' : 'hidden',
  transition: 'opacity 0.3s, visibility 0.3s',
  '&:hover': {
    backgroundColor: PRIMARY_COLORS.element,
    color: PRIMARY_COLORS.section,
  },
}));

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollButton isVisible={isVisible} onClick={scrollToTop}>
      <KeyboardArrowUpIcon color={'action'}/>
    </ScrollButton>
  );
};
