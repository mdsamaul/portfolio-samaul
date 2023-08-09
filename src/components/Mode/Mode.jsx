import { BsFillGearFill } from "react-icons/Bs";
import { GrSettingsOption } from "react-icons/Gr";
import { HiLightningBolt } from "react-icons/Hi";
import { MdDarkMode, MdLightMode } from "react-icons/Md";
const Mode = () => {
  return (
    <div className="flex items-center h-screen z-50">
      <div className="w-20 flex items-center fixed bg-primary rounded-l-xl">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn flex justify-center btn-primary items-center"
            >
              <BsFillGearFill className="animate-spin text-4xl mr-4 text-white " />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <div className="menu p-0 w-80 h-full bg-base-200 text-base-content">
              <div className="w-full h-[72px] border-b border-red-500 bg-info flex justify-center items-center">
                <div className="px-5 text-white">
                  <GrSettingsOption className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Settings</h3>
                </div>
              </div>
              <div className="px-5">
                <div className="py-5">
                  THEME
                  <div className="text-center">
                    <div className="mx-auto my-4">
                      <button className="btn btn-outline mr-2">Default</button>
                      <button className="btn btn-outline btn-neutral mr-2">
                        Brand
                      </button>
                      <button className="btn btn-outline btn-primary">
                        Teal
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-outline btn-accent">
                        Purpel
                      </button>
                      <button className="btn btn-outline btn-ghost mx-2">
                        Rose
                      </button>
                      <button className="btn btn-outline btn-ghost">
                        Amber
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div>
                <span className="my-5 px-5"> SCHEME</span>
                <div className="my-5 text-center">
                  <button className="btn w-[30%] btn-outline btn-info  rounded-full">
                    <HiLightningBolt />{" "}
                    <span className="text-md capitalize"> Auto</span>{" "}
                  </button>
                  <button className=" w-[30%] btn btn-outline btn-accent rounded-full mx-3">
                    {" "}
                    <span className="text-md capitalize">
                      <MdLightMode /> Light
                    </span>{" "}
                  </button>
                  <button className="btn  w-[30%] btn-outline  rounded-full btn-success">
                    <MdDarkMode />{" "}
                    <span className="text-md capitalize"> Dark</span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
