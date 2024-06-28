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
    <div className="sm:gap-[34px] sm:px-[20px] | md:gap-[38px] md:px-[24px] | lg:gap-[42px] lg:px-[30px] | xl:gap-[46px] xl:px-[36px] bg-neutral-rich-black bg-opacity-20 w-full h-140 gap-[30px] px-[16px] py-[20px] justify-center items-center rounded-normal flex">
      <h1 className="lg:text-[72px] | md:text-[60px] | text-[48px] text-secondary-cadmium-green font-black">
        {number}.
      </h1>
      <div className="flex flex-col gap-[1vh] items-start w-full">
        <div className="sm:gap-[14px] | md:gap-[18px] | lg:gap-[22px] | text-secondary-cadmium-green flex items-center gap-[10px] h-[40px]">
          {icon}
          <h2 className="md:text-[20px] | sm:text-[16px] | lg:text-[30px] font-bold text-[14px] text-nowrap">
            {title}
          </h2>
        </div>
        <p className="text-[12px] | sm:text-[14px] | md:text-[16px] | lg:text-[20px]  font-medium text-neutral-rich-black">
          {description}
        </p>
      </div>
    </div>
  );
};
