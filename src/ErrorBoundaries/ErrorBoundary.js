
const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ color: 'red', padding: '1rem', textAlign: 'center' }}>
      <h2>Something went wrong</h2>
      <pre>{error?.message}</pre>
      <button className="btn btn-dark" onClick={resetErrorBoundary}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallBack;
