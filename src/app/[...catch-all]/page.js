'use client';

import Button from '@/components/ui/button';
import useMousePosition from '@/hooks/use-mouse-position';
import useWindowSize from '@/hooks/use-window-size';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden text-center">
      <div>
        <div
          className="absolute inset-0 -z-50 font-bold text-amber-300"
          style={{
            fontSize: '26vw',
            transform: `translate(${(mousePosition.x - windowSize.width / 2) * 0.01}px, ${
              (mousePosition.y - windowSize.height / 2) * 0.01
            }px)`,
          }}
        >
          404
        </div>
        <div
          className="absolute inset-0 -z-50 font-bold text-amber-200"
          style={{
            fontSize: '26vw',
            transform: `translate(${(mousePosition.x - windowSize.width / 2) * 0.03}px, ${
              (mousePosition.y - windowSize.height / 2) * 0.03
            }px)`,
          }}
        >
          404
        </div>
        <h1 className="text-3xl font-semibold">Well, this page is not implemented.</h1>
        <p>
          Click{' '}
          <Button
            variant="anchor"
            className="p-0"
            onClick={() => {
              router.back();
            }}
          >
            here
          </Button>{' '}
          to go back.
        </p>
        <small className="text-neutral-400">p.s. I can center a div.</small>
      </div>
    </div>
  );
}
