// components/EmblaButtons.js
import Image from "next/image";
import Right from "../../../public/right.svg"
import Left from "../../../public/left.svg"
import Line from "../../../public/line-horizontal-1-16-regular.svg"

export const PrevButton = ({ onClick, enabled }) => (
    <button
      className={`absolute hover:gap-2 duration-300 text-sm flex flex-row justify-items-center items-center gap-3 transform -translate-y-1/2 p-2 ${enabled ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
      onClick={onClick}
      disabled={!enabled}
      style={{color:"#242424" ,top:"90%" ,left:"2%"}}
    >
    <Image src={Left} className="scale-75"/><p className="tracking-widest">PREVIOUS</p><Image className="scale-x-125" src={Line}/>
    </button>
  );
  
  export const NextButton = ({ onClick, enabled }) => (
    <button
      className={`absolute hover:gap-2 duration-300  text-sm flex flex-row  justify-items-center items-center gap-3 transform -translate-y-1/2 p-2 ${enabled ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
      onClick={onClick}
      disabled={!enabled}
      style={{color:"#242424" ,top:"90%" ,right:"2%"}}
    >
    <Image src={Line} className="scale-x-125"/><p className="tracking-widest">NEXT</p><Image src={Right} className="scale-75"/>
    </button>
  );
  