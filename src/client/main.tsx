import { StrictMode } from 'hono/jsx';
import { createRoot } from 'hono/jsx/dom/client';
import { App } from './App.js';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
