import { useActiveLink } from "@/context/LinkContext";

type ButtonTextProp = {
  text: string;
};

export default function Button({ text }: ButtonTextProp) {
  const { setShowPopup } = useActiveLink();
  return (
    <button
      onClick={() => setShowPopup(true)}
      type="button"
      className="font-bold bg-blue-950 text-white py-2 px-5 rounded-md"
    >
      {text}
    </button>
  );
}
