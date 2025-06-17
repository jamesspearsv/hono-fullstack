import { useState } from 'hono/jsx';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increase count
      </button>
      <span>Count: {count}</span>
    </div>
  );
}
