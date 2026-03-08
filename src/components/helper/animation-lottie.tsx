"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import type { CSSProperties } from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false }) as React.ComponentType<{
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
}>;

interface AnimationLottieProps {
  animationPath: any; // Lottie animation data (JSON object)
  width?: string | number;
}

const AnimationLottie = ({ animationPath, width }: AnimationLottieProps) => {
  const style: CSSProperties = {
    width: width || '95%',
  };

  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={style}
    />
  );
};

export default AnimationLottie;