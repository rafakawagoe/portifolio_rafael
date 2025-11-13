import { useNavigate } from 'react-router-dom';

export const useNavigateToAbout = () => {
  const navigate = useNavigate();
  
  const navigateToAbout = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return navigateToAbout;
};
