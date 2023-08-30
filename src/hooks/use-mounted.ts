"use client";

import { useEffect, useState } from "react";

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted, setIsMounted };
};

export default useMounted;
