import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  function handleClick() {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={handleClick}
      className="fixed
        bottom-6
        right-6
        rounded-full
        bg-blue-600
        p-4
        text-white
        shadow-lg
        hover:bg-blue-700"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;
