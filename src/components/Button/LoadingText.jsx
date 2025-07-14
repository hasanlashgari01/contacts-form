export const LoadingText = ({ text, loadingText, children, isLoading }) => {
  return (
    <span className="flex items-center justify-center gap-2">
      {children}
      {isLoading ? loadingText : text}
    </span>
  );
};
