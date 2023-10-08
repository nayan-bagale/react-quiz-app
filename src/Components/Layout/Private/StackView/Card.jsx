import { useCallback } from "react";

const Card = ({ item, i, setAns, ans }) => {
  const handleClick = useCallback((item, option) => {
    setAns((prev) => ({ ...prev, [item.key]: option.value }));
  });
  return (
    <fieldset
      key={`${item.key}-group`}
      id={`${item.key}-group`}
      className=" text-base sm:text-lg md:text-xl text-white w-[90vw] sm:w-[70vw] md:max-w-[60vh] p-6 border bg-gray-800/90 rounded-lg flex flex-col gap-4"
    >
      <h1 className=" break-words">
        <span>Q{i + 1}) </span>
        {item.data.question}
      </h1>

      <div className="flex flex-col gap-1 ml-4">
        {item.data.options.map((option) => {
          return (
            <div
              className={`flex justify-between gap-1 rounded hover:bg-gray-600 p-1 ${
                ans[item.key] === option.value ? "bg-gray-700" : ""
              }`}
            >
              <label
                htmlFor={`${option.key}-item-${item.key}-group`}
                className="w-full px-4 cursor-pointer"
                onClick={() => handleClick(item, option)}
              >
                {option.value}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default Card;
