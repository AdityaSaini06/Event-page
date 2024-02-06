import RectangleComponent from "../components/RectangleComponent";
import MainFrame1 from "./MainFrame1";

const MainFrame = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#030612,_#272933_24.01%,_#33353e_52.01%,_#242731_75.01%,_#050814)] overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[398px] box-border gap-[2px] tracking-[normal]">
      <div className="self-stretch h-[2522px] relative [background:linear-gradient(180deg,_#030612,_#272933_24.01%,_#33353e_52.01%,_#242731_75.01%,_#050814)] hidden" />
      <RectangleComponent />
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border min-h-[1274px] max-w-full text-center text-[56px] text-gainsboro font-inter">
        <div className="flex-1 flex flex-row items-end justify-center py-[77px] pr-5 pl-[25px] box-border bg-[url('/public/registration-ends-frame@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[959px] max-w-full z-[1]">
          <img
            className="h-[959px] w-[1924px] relative object-cover hidden max-w-full"
            alt=""
            src="/vecteezy-cutecatwearingvirtualrealitygogglesondarkbackground-29254807-254-1@2x.png"
          />
          <h1 className="m-0 h-[68px] w-[953px] relative text-inherit capitalize font-medium font-inherit inline-block shrink-0 max-w-full z-[2] mq450:text-[34px] mq1000:text-[45px]">
            Lorem ipsum dolor sit amet
          </h1>
        </div>
      </section>
      <MainFrame1 />
    </div>
  );
};

export default MainFrame;
