import { ReactNode, Suspense } from "react";

export function withSuspense(element: ReactNode): ReactNode {
  return <Suspense fallback={<></>}>{element}</Suspense>;
}
