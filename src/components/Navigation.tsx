import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav style={{ 
      background: '#f8f9fa', 
      padding: '15px 30px', 
      borderBottom: '1px solid #e9ecef',
      display: 'flex',
      gap: '20px'
    }}>
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none',
          color: location.pathname === '/' ? '#0066fe' : '#6c757d',
          fontWeight: location.pathname === '/' ? '600' : '400',
          padding: '8px 16px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          background: location.pathname === '/' ? '#e3f2fd' : 'transparent'
        }}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={{ 
          textDecoration: 'none',
          color: location.pathname === '/about' ? '#0066fe' : '#6c757d',
          fontWeight: location.pathname === '/about' ? '600' : '400',
          padding: '8px 16px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          background: location.pathname === '/about' ? '#e3f2fd' : 'transparent'
        }}
      >
        About
      </Link>
    </nav>
  );
};

export default Navigation;

