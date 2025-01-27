```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>This is a simple Next.js application.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearTimeout(timer); // cleanup function
  }, []); // Empty dependency array

  return (
    <div>
      <p>Component Count: {count}</p>
    </div>
  );
}
```