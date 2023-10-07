import CardTitle from "@/components/CardTitle";

export default function CardRow({ title, children }) {
  return (
    <div className="w-full  pl-20">
      <CardTitle name={title} />
      <div className="w-full flex space-x-1">{children}</div>
    </div>
  );
}
