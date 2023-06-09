'use client';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Loader() {
  return (
    <>
      <Player
        autoplay
        loop
        className={`sticky inset-0 my-auto aspect-square`}
        src='/assets/lottie/red-car.json'
      ></Player>
    </>
  );
}
