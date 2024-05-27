import CardFooter from "./Footer/cardFooter";

const Card = ({ i, l, yr, q, rank, s, onDelete, id }) => {
  return (
    <div className="w-[300px] h-full border flex flex-col gap-[10px]">
      {i && i.imageUrl ? (
        <img
          src={i.imageUrl}
          alt={l}
          className="w-full h-full
           object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span>No Image Available</span>
        </div>
      )}
      <div className="flex justify-between pl-[10px] pr-[10px]">
        <h3>{l}</h3>
        <h3>{yr}</h3>
      </div>
      <div className="flex justify-between pl-[10px] pr-[10px]">
        <h3>{q}</h3>
        <h3>{rank}</h3>
      </div>
      <p className="pl-[10px] pr-[10px] text-left">{s}</p>
      <CardFooter onDelete={onDelete} id={id} />
    </div>
  );
};

export default Card;
