import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center py-80 gap-40 inline-flex">
      <h1 className="font-instrument text-lightMode-text text-9xl">
        {t("greeting")}
      </h1>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-1")}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-2")}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-3")}
        </p>
      </div>
    </div>
  );
}
