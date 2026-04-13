import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Toxic Poetry Club` : "Toxic Poetry Club | Seattle's Premier Poetry Club";
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
