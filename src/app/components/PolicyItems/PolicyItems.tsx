interface PolicyItemsProps {
  num: number;
  title: string;
  subtitle?: string;
  itens: string[];
}

export default function PolicyItems(props: PolicyItemsProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:px-[100px] xl:px-[160px]">
        <div className="flex items-center text-[20px] md:text-[24px] lg:text-[32px] font-semibold gap-3">
          <span>{props.num}.</span>
          <h2 className="">{props.title}</h2>
        </div>
        {props.subtitle ? (
          <span className="text-[15px] md:text-[18px] lg:text-[24px]">
            {props.subtitle}
          </span>
        ) : null}
      </div>
      <ul className="list-disc text-justify flex flex-col gap-3 px-5 text-[13px] md:text-[16px] lg:text-[20px] lg:px-[120px] xl:px-[180px]">
        {props.itens && props.itens.length > 0
          ? props.itens.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </div>
  );
}
