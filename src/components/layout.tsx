import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full max-w-2xl  border-x border-slate-500">
        {props.children}
      </div>
    </main>
  );
};
