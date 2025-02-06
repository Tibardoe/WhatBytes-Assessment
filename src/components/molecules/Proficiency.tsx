type SyllabusAnalysisProp = {
  text: string;
  percentage: number;
  color: string;
};

export default function Proficiency({
  text,
  percentage,
  color,
}: SyllabusAnalysisProp) {
  return (
    <div className="">
      <p className="mb-5">{text}</p>
      <div className="flex w-full justify-between items-center gap-10">
        <div
          className="w-full h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: `${color}20` }}
        >
          <div
            className="h-full"
            style={{
              backgroundColor: color,
              width: `${percentage}%`,
            }}
          />
        </div>

        <span style={{ color: color, fontWeight: "bold" }}>{percentage}%</span>
      </div>
    </div>
  );
}
