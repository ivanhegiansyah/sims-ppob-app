function Button({ text, className, onClick, disabled = false }) {
  return (
    <>
      <button
        disabled={disabled}
        className={`w-full px-4 py-3 block transition-colors rounded ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
