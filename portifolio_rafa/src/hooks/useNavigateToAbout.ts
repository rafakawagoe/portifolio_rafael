import { useNavigate } from 'react-router-dom';

export const useNavigateToAbout = () => {
  const navigate = useNavigate();
  
  const navigateToAbout = () => {
    navigate('/about');
  };
  
  return navigateToAbout;
};
