import { ReactNode } from "react";

export default function Placeholder({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="container mx-auto max-w-4xl py-16">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">
        This section will be developed next. Tell me what you want here and I’ll complete it.
      </p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
