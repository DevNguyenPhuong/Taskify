function FormRow({ label, error, children }) {
  return (
    <div className=" grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 px-0 py-5 first:pt-0 last:pb-0 [&:has(button)]:flex [&:has(button)]:justify-end [&:has(button)]:gap-5 [&:not(:last-child)]:border-solid [&:not(:last-child)]:border-b-gray-100">
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

export default FormRow;
