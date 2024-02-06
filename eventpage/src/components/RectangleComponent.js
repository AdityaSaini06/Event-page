const RectangleComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-end justify-between pt-2 pb-0 pr-[38px] pl-0 box-border sticky gap-[20px] top-[0] z-[99] max-w-full text-left text-mini text-white font-inter">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200" />
      <div className="h-[86px] w-[178px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
        <img
          className="w-[99px] h-[88px] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/imageedit-10-3049730799-1@2x.png"
        />
      </div>
      <div className="h-7 w-[640px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full mq1000:w-0">
        <nav className="m-0 self-stretch flex-1 flex flex-row items-start justify-between gap-[20px] text-left text-mini text-white font-inter mq1000:hidden">
          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
            <div className="relative capitalize font-light z-[1]">blogs</div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
            <div className="relative [text-decoration:underline] capitalize font-semibold z-[1]">
              events
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
            <div className="relative capitalize font-light z-[1]">
              achievements
            </div>
          </div>
          <div className="relative capitalize font-light z-[1]">projects</div>
          <div className="relative capitalize font-light z-[1]">about</div>
        </nav>
      </div>
      <div className="h-[23px] w-[66px] absolute my-0 mx-[!important] right-[921px] bottom-[-828px] font-extralight inline-block" />
      <div className="w-[148px] flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[41px] w-[93px] absolute my-0 mx-[!important] top-[calc(50%_-_20.5px)] left-[-27px] rounded-3xs bg-royalblue-200 z-[1]" />
            <div className="h-[39px] w-[91px] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] left-[-26px] rounded-3xs bg-gray-100 z-[2]" />
            <div className="relative font-extralight whitespace-nowrap z-[3]">
              <p className="m-0">log in</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[39px] w-[91px] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] right-[-20px] rounded-3xs bg-royalblue-200 z-[1]" />
            <div className="relative whitespace-nowrap z-[2]">sign up</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RectangleComponent;
