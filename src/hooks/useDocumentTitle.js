import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Toxic Poetry Club` : "Seattle Poetry Groups | Toxic Poetry Club Meetups in Seattle";
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
