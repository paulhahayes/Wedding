"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useRegistryStore } from "../store";

interface FeatureTitleProps {
  children: React.ReactNode;
  id: string;
}

export const FeatureTitle: React.FC<FeatureTitleProps> = ({ children, id }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useRegistryStore((state) => state.setInView);
  const inViewFeature = useRegistryStore((state) => state.inView);

  const baseClasses =
    "py-16 text-5xl font-heading transition-colors text-center";
  const colorClasses = isInView
    ? "text-black border-2 border-black rounded-xl shadow-bs "
    : "text-gray-300";

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
    }
    if (!isInView && inViewFeature === id) {
      setInViewFeature(null);
    }
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p ref={ref} className={twMerge(baseClasses, colorClasses)}>
      {children}
    </p>
  );
};
