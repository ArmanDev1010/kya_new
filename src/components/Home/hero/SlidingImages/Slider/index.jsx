import Image from "next/image";

export default function index({ project }) {
  return (
    <div
      className="bg-[#e3e3e3] w-[25%] h-[20vw] flex items-center justify-center max-_1600:!w-[30vw]"
      style={{ backgroundColor: project.color }}
    >
      <div className={`relative w-[80%] h-[80%]`}>
        <Image
          src={`/assets/hero/${project.src}.JPG`}
          fill={true}
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}
