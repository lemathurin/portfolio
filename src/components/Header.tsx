"use client";

import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);
  const contentType = pathSegments[1]; // Second segment after locale

  const isDetailPage = pathSegments.length > 2;

  function getLinkDestination() {
    if (contentType && contentType !== "home" && isDetailPage) {
      return `/${contentType}`;
    }
    return "/";
  }

  function getLinkText() {
    if (contentType && contentType !== "home" && isDetailPage) {
      return t(`${contentType}`) || contentType;
    }
    return t("home");
  }

  return (
    <header className="flex w-full items-center justify-between gap-4">
      <Link href={getLinkDestination()} className="home-navigation text-sm">
        {getLinkText()}
      </Link>
      <LanguageToggle />
    </header>
  );
}
