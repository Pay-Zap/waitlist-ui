import { useCallback, useEffect, useRef } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";
import {
  TCanvasConfettiAnimationOptions,
  TCanvasConfettiInstance,
} from "react-canvas-confetti/dist/types";

export default function Confetti() {
  const refAnimationInstance = useRef<TCanvasConfettiInstance>(null);

  const onInitHandler = ({ confetti }: { confetti: TCanvasConfettiInstance }) =>
    (refAnimationInstance.current = confetti);

  const makeShot = useCallback(
    (particleRatio: number, opts: TCanvasConfettiAnimationOptions) => {
      if (refAnimationInstance.current)
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio),
        });
    },
    [],
  );

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => fire(), [fire]);

  return <ReactCanvasConfetti onInit={onInitHandler} />;
}
