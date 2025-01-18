```javascript
import Link from 'next/link';

function MyComponent() {
  const hasAboutPage = true; // Check if '/about' page is available dynamically

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      {hasAboutPage && (
        <Link href="/about">
          <a>About</a>
        </Link>
      )} 
      {!hasAboutPage && <p>About page is not available.</p>}
    </div>
  );
}

export default MyComponent;
```