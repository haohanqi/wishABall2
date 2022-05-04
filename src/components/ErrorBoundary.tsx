import React from "react";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CustomizedErrorBoundary = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);

export default CustomizedErrorBoundary;
