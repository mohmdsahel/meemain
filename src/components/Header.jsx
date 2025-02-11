

import { logo1 } from "../assets";

import Button from "./Button";


const Header = () => {

  return (
    <div
      className="absolute top-0 left-0 w-full z-50  bg-gradient-to-b from-black/90 to-transparent  lg:backdrop-blur-sm"
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[16rem] p-4 xl:mr-8" >

          <img src={logo1} width={200} height={50} alt="logo" />
        </a>


        

        
        <Button className=" ml-auto lg:flex" href="mailto:info@meenterpriseai.com">
          Contact
        </Button>


       

      </div>
    </div>
  );
};

export default Header;
