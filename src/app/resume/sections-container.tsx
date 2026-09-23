import type { ReactNode } from "react";

type ResumeSectionsContainerProps = {
  children: ReactNode;
};

export function ResumeSectionsContainer({
  children,
}: ResumeSectionsContainerProps) {
  return (
    <div className="col-start-1 min-w-0 md:col-start-4 md:col-end-12">
      {children}
    </div>
  );
}
