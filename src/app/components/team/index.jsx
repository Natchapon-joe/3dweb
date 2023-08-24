export default function Team() {
  const card =
    "border-b-2 border-gray-300 shadow-md rounded-[8px] animate-zoom-in w-full";
  const name = "text-[#aaa] text-[16px]";
  const position = "text-[#aaa] text-[12px]";
  return (
    <div id="Team" className="py-[28px]">
      <div className="w-full text-center md:px-[200px]">
        <h4>TEAM MEMBERS</h4>
        <em>
          Resolution possession discovered surrounded advantages has but few
          add. Yet walls times spoil put. Be it reserved contempt rendered
          smallest. Studied to passage it mention calling believe an.
        </em>
      </div>
      {/* Manager */}
      <div className="grid md:grid-cols-3 grid-rows-3 gap-x-[24px] gap-y-[24px] pt-[20px] md:h-[500px]">
        <div className="w-full hover:scale-110 duration-300 h-full">
          <div className={card}>
            <div className="h-full w-full">
              <img
                src="/manager/mart.da903d7e8c53e1eedf1d.png"
                className="rounded-8 h-full object-cover w-full max-h-[440px] rounded-t-[8px]"
              />
            </div>
            <div className=" text-center m-0">
              <h6 className={name}>Somprasonk.G</h6>
              <span className={position}>Co-founder/MD</span>
            </div>
          </div>
        </div>
        <div className="w-full hover:scale-110 duration-300 max-h-[500px]">
          <div className={card}>
            <div className="h-full w-full">
              <img
                src="/manager/moss1.bc199a61c638541d7629.png"
                className="rounded-8 h-full object-cover w-full max-h-[440px] rounded-t-[8px]"
              />
            </div>
            <div className="text-center m-0">
              <h6 className={name}>Somprasonk.G</h6>
              <span className={position}>Co-founder/MD</span>
            </div>
          </div>
        </div>
        <div className="w-full hover:scale-110 duration-300 max-h-[500px]">
          <div className={card}>
            <div className="h-full w-full">
              <img
                src="/manager/pdew-cut.0ab8388ba4b1efe54746.jpg"
                className="rounded-8 h-full object-cover w-full max-h-[440px] rounded-t-[8px]"
              />
            </div>
            <div className="text-center m-0 hover:text-[#ff8c8c]">
              <h6 className={name}>Dew.K</h6>
              <span className={position}>Head of Business Solution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
