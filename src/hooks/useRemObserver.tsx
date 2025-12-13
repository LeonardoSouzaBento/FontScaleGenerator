import { useEffect, useState } from "react";

export function useRemObserver() {
  const getRootFontSize = () =>
    parseFloat(getComputedStyle(document.documentElement).fontSize);

  const [rootFontSize, setRootFontSize] = useState<number>(16);

  useEffect(() => {
    const update = () => {
      const value = getRootFontSize();
      setRootFontSize((prev) => (prev === value ? prev : value));
    };

    update();

    window.addEventListener("resize", update);

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return Number(rootFontSize.toFixed(2));
}
