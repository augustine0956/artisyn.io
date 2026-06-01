"use client";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // capture the exception with Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center">
        <div className="max-w-md p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
          <p className="text-sm text-muted-foreground mb-4">An unexpected error occurred. Our team has been notified.</p>
          <button
            onClick={() => {
              Sentry.captureMessage('User clicked retry from error boundary');
              reset();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}
