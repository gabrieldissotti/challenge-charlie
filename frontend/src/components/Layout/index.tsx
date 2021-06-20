import React, { useEffect, useState, useCallback } from 'react';
import CharlieAPI from '@libraries/CharlieAPI';

const Layout: React.FC = ({ children }) => {
  const [imageURL, setImageURL] = useState('');

  const updateBackgroundImage = useCallback(async () => {
    const url = await CharlieAPI.getImage();

    setImageURL(url);
  }, []);

  useEffect(() => {
    updateBackgroundImage();
  }, []);

  console.log(imageURL);

  return (
    <div className="layout">
      <img
        className="background"
        src={imageURL}
        alt="background"
      />

      {children}
    </div>
  );
};

export default Layout;