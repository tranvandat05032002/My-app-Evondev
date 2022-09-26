import React from "react";

const CardTailWind = (props) => {
  //css classes tailwind
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.secondary ? "bg-secondary-gradient" : "bg-primary-gradient"
  }`;

  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full rounded-lg object-cover"
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </div>
      <div className="absolute left-2/4 bottom-0 -translate-x-2/4 translate-y-2/4 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-x-[12px]">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <span className="text-[16px] font-light text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <img src="/icon-heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className={`${props.fontSize || "text-[18px]"} font-medium m-0`}>
            Cosmic Perspective
          </h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
