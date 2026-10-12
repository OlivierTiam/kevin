import PartCard from "./PartCard.jsx";

export default function PartGrid({ parts }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
      {parts.map((p) => (
        <PartCard key={p.id} part={p} />
      ))}
    </div>
  );
}