import HeaderProfile from "../molecules/HeaderProfile";
import Logo from "../molecules/Logo";

export default function Header() {
  return (
    <div className="flex justify-between p-5 border border-b-black border-opacity-50">
      <Logo />
      <HeaderProfile />
    </div>
  );
}
