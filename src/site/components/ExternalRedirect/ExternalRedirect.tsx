"use client";

import { useEffect } from "react";

type ExternalRedirectProps = {
  to: string;
};

export default function ExternalRedirect({ to }: ExternalRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}
