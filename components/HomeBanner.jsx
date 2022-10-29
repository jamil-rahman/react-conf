import Image from "next/image";
import image_1 from "../public/mic_guy.png";
import arrow from "../public/arrow_up.png";
import image_2 from "../public/green_guy.png";
export default function HomeBanner() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-100 md:w-2/4 md:float-left">
        <div className="m-0 p-6">
          <p className="text-end text-c_navy font-inter font-bold text-xl md:text-2xl">
            React
          </p>
          <p className="text-end text-c_navy font-inter font-bold text-xl md:text-2xl">
            Conference
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="md:float-left flex justify-center items-center md:w-1/2">
              <Image src={image_1} alt="guy with mic" sizes="100vw" priority />
            </div>

            <div className="mt-4  md:w-1/2 md:float-right">
              <p className="font-inter">
                Lorem uis diam turpis quam id fermentum. In quis diam turpis
                quam id fermentum..id fermentum. In quis diam turpis quam id
                fermentum.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-c_yellow w-64 p-2 rounded-3xl mt-8 items-center flex justify-center font-inter font-semibold ">
                  Buy Tickets
                  <Image
                    src={arrow}
                    alt="buy now button arrow"
                    className="ml-2"
                    height={16}
                    width={16}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 md:w-2/4 md:float-left">
        <div className="md:pt-64 md:pl-16">
          <Image src={image_2} alt="green guy with laptop" priority />
        </div>
      </div>
    </div>
  );
}
