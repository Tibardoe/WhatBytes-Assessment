import Image from "next/image";

export default function HeaderProfile() {
  return (
    <div className="flex gap-2 items-center px-2 border border-black border-opacity-50 rounded-md">
      <Image
        src="/assets/images/avatar.jpg"
        alt="Profile image"
        width={35}
        height={35}
        className="rounded-full"
      />
      <p className="text-lg font-bold">Rahil Siddique</p>
    </div>
  );
}
