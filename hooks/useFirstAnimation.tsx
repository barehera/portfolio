import React, { useEffect, useState } from "react";

const useFirstAnimation = () => {
  const [showScreen, setShowScreen] = useState<boolean>(false);

  useEffect(() => {
    setShowScreen(true);

    return () => {
      setShowScreen(false);
    };
  }, []);

  return showScreen;
};

export default useFirstAnimation;
