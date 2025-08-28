import { useNavigate } from "react-router-dom";

export const useNavigateToSection = () => {
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    // If we're already on the home page, just scroll
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash, the useEffect in Index.tsx will handle scrolling
      navigate(`/#${sectionId}`);
    }
  };

  return navigateToSection;
};