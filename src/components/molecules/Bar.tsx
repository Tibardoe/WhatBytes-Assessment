type BarProps = {
  children: React.ReactNode;
};

export default function Bar({ children }: BarProps) {
  return (
    <div className="p-5 border border-black border-opacity-50 rounded-md">
      {children}
    </div>
  );
}
