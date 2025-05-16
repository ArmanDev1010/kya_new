import Image from "next/image";

export default function index(props) {
  return (
    <div
      className="w-[25%] h-[20vw] flex items-center justify-center"
      style={{ backgroundColor: props.project.color }}
    >
      <div className="relative w-[80%] h-[80%]">
        <Image
          src={`/images/${props.project.src}`}
          fill={true}
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}
