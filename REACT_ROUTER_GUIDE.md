# React Router Tutorial Guide

## What is React Router?

React Router is a library that allows you to create **multi-page** applications in React. Even though React is a Single Page Application (SPA) framework, React Router makes it feel like you have multiple pages by showing/hiding different components based on the URL.

## Key Concepts

### 1. **BrowserRouter**
- Wraps your entire app and enables routing
- Uses the browser's history API to track navigation
- Must wrap all components that use routing features

```tsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  {/* Your app content */}
</BrowserRouter>
```

### 2. **Routes**
- Container that holds all your route definitions
- Only renders the first matching route

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 3. **Route**
- Defines a single route mapping
- `path`: The URL path (e.g., "/", "/about")
- `element`: The component to render when the path matches

```tsx
<Route path="/about" element={<About />} />
```

### 4. **Link**
- Replaces `<a>` tags for navigation
- Prevents full page reloads (SPA behavior)
- Updates the URL without refreshing the page

```tsx
import { Link } from 'react-router-dom';

<Link to="/about">Go to About</Link>
```

### 5. **useLocation Hook**
- Returns the current location object
- Useful for conditional styling based on active route

```tsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log(location.pathname); // "/about"
```

### 6. **useNavigate Hook**
- Programmatically navigate to different routes
- Useful for redirects after form submissions, etc.

```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/about'); // Navigate to /about
```

## How It Works in Your Project

### File Structure:
```
src/
  ├── App.tsx          (Sets up routing)
  ├── components/
  │   ├── Navigation.tsx  (Navigation links)
  │   ├── TodoList.tsx
  │   └── TodoForm.tsx
  └── pages/
      ├── Home.tsx      (Route: "/")
      └── About.tsx     (Route: "/about")
```

### App.tsx Setup:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
```

### Navigation Component:
```tsx
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
```

## Common Patterns

### 1. **Nested Routes**
Create routes within routes:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />}>
    <Route path=":id" element={<UserDetail />} />
  </Route>
</Routes>
```

### 2. **URL Parameters**
Access dynamic URL segments:

```tsx
// Route: /user/:id
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
};
```

### 3. **Query Parameters**
Access query strings:

```tsx
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  return <div>Searching for: {query}</div>;
};
// URL: /search?q=react
```

### 4. **Programmatic Navigation**
Navigate after actions:

```tsx
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // ... login logic
    navigate('/dashboard'); // Redirect after login
  };
};
```

### 5. **Protected Routes**
Require authentication:

```tsx
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Your auth logic
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

## Best Practices

1. **Keep routes organized**: Use a `pages/` or `routes/` folder
2. **Use Link instead of `<a>`**: Prevents full page reloads
3. **Handle 404s**: Add a catch-all route at the end
4. **Lazy load routes**: Use React.lazy() for code splitting

```tsx
// 404 Route
<Route path="*" element={<NotFound />} />

// Lazy Loading
const About = React.lazy(() => import('./pages/About'));

<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
```

## Try It Out!

1. Click the "Home" and "About" links in the navigation
2. Notice the URL changes but the page doesn't reload
3. Try typing different URLs in the address bar
4. Check the browser's back/forward buttons - they work!

## Next Steps

- Add more routes (e.g., `/settings`, `/profile`)
- Create dynamic routes with parameters
- Add protected routes for authentication
- Implement nested routing for complex layouts

