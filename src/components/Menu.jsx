import React from "react";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45 " : ""
          }`}
        ></div>
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col  ${
          menuOpened ? "w-full md:w-80 " : "w-0"
        }`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          {["About", "Skills", "Projects", "Contacts"].map((item, index) => (
            <MenuButton
              key={item}
              label={item}
              onClick={() => onSectionChange(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;

  return (
    <button
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
