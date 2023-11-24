import { useRef } from "react";

const CategoryParent = () => {
  const categoryEl = useRef(null);
  const handleHover = () => {
    console.log(categoryEl.current.target.value)
  }
  return (
    <>
      <li
        ref={categoryEl}
        onMouseOver={handleHover}
        className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"
      >
        <a href="#" className="category--link">
          Книги
        </a>
      </li>
    </>
  );
};

export default CategoryParent;
