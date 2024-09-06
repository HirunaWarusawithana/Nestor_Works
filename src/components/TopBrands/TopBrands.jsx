import Titan from "../../../public/titan ladies.jpg";
import Casio from "../../../public/casio.jpeg";
import Alba from "../../../public/albaladies.jpg";
import Seiko from "../../../public/SEIKO_ProspexPADI-feature.jpg";
import Image from "next/image";

const TopBrands = () => {
  return (
    <div className="topbrands my-5">
      <div className="topics text-center mt-20 mb-20">
        <h6 className="text-4xl font-black tracking-tight ">TOP BRANDS</h6>
        <p className="mt-2 font-medium text-gray-500">
          Premier timepieces for timeless style.
        </p>
      </div>

      <div className="display-brands grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 m-20 ">

        <div className="relative flex flex-col group">
          <Image
            className="w-full h-96 object-cover rounded-3xl transition-transform duration-500 ease-in-out transform group-hover:scale-105" // Add hover effect here
            src={Seiko}
            alt="Seiko"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-white font-medium p-4 ml-4 mb-4">
            <p className="text-2xl leading-relaxed">SEIKO</p>
            <p className="text-lg leading-relaxed mt-2">Timeless Precision</p>
            <button className="hover:bg-gray-300 duration-300 mt-4 p-2 bg-white rounded-full text-black font-medium px-4">
              Shop
            </button>
          </div>
        </div>

        <div className="relative flex flex-col group">
          <Image className="w-full h-96 object-cover rounded-3xl transition-transform duration-500 ease-in-out transform group-hover:scale-105" src={Titan} alt="Titan" />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-white font-medium  p-4 ml-4 mb-4">
            <p className="text-2xl leading-relaxed">TITAN</p>
            <p className="text-lg leading-relaxed mt-2">
              Elegant Craftsmanship
            </p>
            <button className="hover:bg-gray-300 duration-300 mt-4 p-2 bg-white  rounded-full text-black font-medium px-4">
              Shop
            </button>
          </div>
        </div>

        <div className="relative flex flex-col group">
          <Image className="w-full h-96 object-cover rounded-3xl transition-transform duration-500 ease-in-out transform group-hover:scale-105" src={Alba} alt="Alba" />
          <div className="absolute inset-0 flex flex-col items-start justify-end  text-white font-medium  p-4 ml-4 mb-4">
            <p className="text-2xl leading-relaxed">ALBA</p>
            <p className="text-lg leading-relaxed mt-2">Modern Classic</p>
            <button className="hover:bg-gray-300 duration-300 mt-4 p-2 bg-white  rounded-full text-black font-medium px-4">
              Shop
            </button>
          </div>
        </div>

        <div className="relative flex flex-col group">
          <Image className="w-full h-96 object-cover rounded-3xl transition-transform duration-500 ease-in-out transform group-hover:scale-105" src={Casio} alt="Casio" />
          <div className="absolute inset-0 flex flex-col items-start justify-end  text-white font-medium  p-4 ml-4 mb-4">
            <p className="text-2xl leading-relaxed">CASIO</p>
            <p className="text-lg leading-relaxed mt-2">Innovative Design</p>
            <button className="hover:bg-gray-300 duration-300 mt-4 p-2 bg-white  rounded-full text-black font-medium px-4">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
