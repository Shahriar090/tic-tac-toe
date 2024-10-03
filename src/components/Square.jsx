const Square = ({ value }) => {
  return (
    <button className="w-16 h-16 bg-white text-black text-xl hover:bg-pink-500 hover:text-white hover:border-2 transition-all duration-300">
      {value}
    </button>
  );
};

export default Square;
