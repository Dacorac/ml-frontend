function withLoading(Component) {
    return function withLoadingComponent({ isLoading, ...props }) {
        console.log("isLoading", isLoading);
        if (!isLoading) return <Component {...props} />;
        return <span>Loading...</span>;
    };
}

export default withLoading;