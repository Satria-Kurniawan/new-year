/* eslint-disable react/prop-types */

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 rounded-2xl bg-gradient-to-r from-violet-400 to-fuchsia-300 text-white border-2 border-transparent hover:border-white hover:text-black duration-300"
    >
      {text}
    </button>
  );
}
