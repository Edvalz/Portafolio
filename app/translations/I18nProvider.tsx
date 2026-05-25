"use client";
import { ReactNode, useEffect, useState } from "react";
import "./translations";

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
