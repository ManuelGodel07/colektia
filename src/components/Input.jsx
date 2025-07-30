export function Input(props) {
  return (
    <input
      {...props}
      className={`w-full border rounded px-3 py-2 outline-none focus:ring focus:border-blue-500 ${props.className || ''}`}
    />
  );
}