import Image from "next/image";

interface UserFeedbackProps {
  name: string;
  lastName: string;
  feedback: string;
  gender: "m" | "f";
}

export default function UserFeedback(props: UserFeedbackProps) {
  const avatarUrL = `https://avatar.iran.liara.run/username?username=${
    props.name + "+" + props.lastName
  }`;

  return (
    <div className="bg-neutral-rich-black bg-opacity-20 border-2 xl:border-4 border-secondary-cadmium-green border-opacity-20 max-w-full xl:w-[80%] md:w-[80%] sm:w-[70%] w-[55%] h-auto xl:px-[40px] justify-center px-[20px] py-3 rounded-normal flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          alt="Avatar do Usuário"
          className="border-2 border-secondary-cadmium-green rounded-full"
          width={50}
          height={50}
          src={avatarUrL}
        />
        <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold">
          {props.name + " " + props.lastName}
        </h1>
      </div>
      <p className="italic text-[16px] text-justify max-w-full xl:text-[24px] md:text-[20px] sm:text-[18px]">
        “{props.feedback}”
      </p>
    </div>
  );
}
