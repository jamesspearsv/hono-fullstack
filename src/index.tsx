import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './dist' }));

app.use(
  '*',
  jsxRenderer(
    ({ children }) => {
      return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <title>Wow cf-workers-hono-client-side</title>
            <link rel="icon" href="/favicon.svg" />
          </head>
          <body>
            {children}
            <script
              type="module"
              src={
                import.meta.env.PROD
                  ? '/static/main.js'
                  : '/src/client/main.tsx'
              }
            ></script>
          </body>
        </html>
      );
    },
    { docType: true }
  )
);

app.get('/', (c) => {
  return c.render(<div id="root"></div>);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

export default app;
