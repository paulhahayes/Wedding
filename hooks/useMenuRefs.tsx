"use client";
import { useRef, useEffect } from "react";

interface MenuItem {
  text: string;
}

const useMenuRefs = (items: MenuItem[]) => {
  const refs = items.reduce<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    (acc, value) => {
      acc[value.text] = useRef<HTMLDivElement>(null);
      return acc;
    },
    {}
  );

  useEffect(() => {
    items.forEach((item) => {
      if (!refs[item.text]) {
        refs[item.text] = useRef<HTMLDivElement>(null);
      }
    });
  }, [items, refs]);

  return refs;
};

export default useMenuRefs;
