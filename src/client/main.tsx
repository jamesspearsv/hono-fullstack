import { StrictMode } from 'hono/jsx';
import { createRoot } from 'hono/jsx/dom/client';
import { App } from './App.js';
import Router from './router.js';
import Hello from './Hello.js';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('No root element');

const routes = [
  {
    href: '/',
    component: App,
  },
  {
    href: '/hello',
    component: () => <Hello name="James" />,
  },
];

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Router routes={routes} />
  </StrictMode>
);
