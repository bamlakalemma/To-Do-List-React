const About = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#044074' }}>About This Todo App</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#6c757d', maxWidth: '500px', margin: '0 auto' }}>
        This is a simple Todo List application built with React, TypeScript, and React Router.
        You can add, edit, and delete tasks to keep track of your daily activities.
      </p>
      <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
        <h3 style={{ color: '#044074', marginBottom: '15px' }}>Features:</h3>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Add new tasks
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Edit existing tasks
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Delete tasks
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Navigate between pages using React Router
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

