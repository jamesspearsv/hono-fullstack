import type { JSXNode, PropsWithChildren, ReactNode } from 'hono/jsx';

interface RouterProps extends PropsWithChildren {
  routes: { href: string; component: () => Element }[];
}

export default function Router({ routes }: RouterProps) {
  const route = routes.find((route) => route.href === window.location.pathname);
  if (route) {
    return route.component();
  } else {
    return <p>No route found</p>;
  }
}
