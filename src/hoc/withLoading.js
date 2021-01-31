function withLoading(Component) {
    return function withLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return <span>Loading...</span>;
    };
}

export default withLoading;