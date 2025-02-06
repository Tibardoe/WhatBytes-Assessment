import SideBarLinks from "../molecules/SideBarLinks";

export default function SideBar() {
  return (
    <div className="w-2/5 min-h-screen px-5 border border-r-black border-opacity-50 xl:w-1/5">
      <SideBarLinks />
    </div>
  );
}
