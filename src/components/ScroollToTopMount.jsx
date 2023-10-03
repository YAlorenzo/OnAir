import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
   window.scroll({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return null; 
}

export default ScrollToTopOnMount;