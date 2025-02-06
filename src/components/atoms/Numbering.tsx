type PointProp = {
  number: number;
};

export default function Numbering({ number }: PointProp) {
  return (
    <span className="w-[25px] h-[25px] rounded-full bg-blue-950 text-white flex justify-center items-center">
      <p>{number}</p>
    </span>
  );
}
