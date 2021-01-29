function withErrorBoundary(Component) {
    return function withErrorBoundary({ error, ...props }) {
      if (!error) return <Component {...props} />;
      return <span>Error: {error.message}</span>;
    };
  
}

export default withErrorBoundary;