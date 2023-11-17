function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex  flex-col gap-3 px-0 py-2 md:py-5 ">
      {label && (
        <label className="font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-[1.4rem] text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
