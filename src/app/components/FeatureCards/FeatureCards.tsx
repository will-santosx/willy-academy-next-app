import { ReactNode } from "react";

interface FeatureCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-rich-black bg-opacity-20 lg:w-[905px] lg:h-[292px] lg:gap-[50px] lg:px-[16px] lg:py-[38px] justify-center rounded-normal flex">
      <h1 className="text-[144px] text-secondary-cadmium-green font-black">
        {number}.
      </h1>
      <div>
        <div className="text-secondary-cadmium-green flex items-center lg:gap-[20px]">
          {icon}
          <h2 className="font-bold text-title-text">{title}</h2>
        </div>
        <p className="text-normal-text font-medium text-neutral-rich-black lg:w-[666px]">
          {description}
        </p>
      </div>
    </div>
  );
};
