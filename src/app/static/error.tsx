"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Oppps!</h1>
      <p>Something went wrong! {error.message}</p>
      <Button onClick={reset}>Reload Page</Button>
    </div>
  );
}
