import APP from "~/constants/configs/app";

export default function Logo() {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      {/** Light Logo */}
      <img
        width={APP.logoSize}
        height={APP.logoSize}
        src={"/favicon.png"}
        alt={"Logo"}
        className="dark:hidden"
      />
      {/** Dark Logo */}
      <img
        width={APP.logoSize}
        height={APP.logoSize}
        src={"/favicon-dark.png"}
        alt={"Logo"}
        className="hidden dark:block"
      />
      <span className="hidden text-2xl font-medium tracking-normal lg:inline-flex">
        {APP.name}
      </span>
    </div>
  );
}
