const Sentry = require('@sentry/nextjs');

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE ? parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE) : 0.02,
  environment: process.env.NODE_ENV || 'production',
  release: process.env.SENTRY_RELEASE,
  attachStacktrace: true,
  beforeSend(event) {
    // sanitize server-side events if necessary
    return event;
  },
});
