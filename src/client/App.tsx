import { useState } from 'hono/jsx';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Increase count
        </button>
        <span>Count: {count}</span>
      </div>
    </section>
  );
}
