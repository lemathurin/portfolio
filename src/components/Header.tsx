"use client";

import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isNotFoundPage?: boolean;
}

export default function Header({ isNotFoundPage = false }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();

  if (isNotFoundPage) {
    return (
      <header className="flex w-full items-center justify-between gap-4">
        <Link href="/" className="home-navigation text-sm">
          {t("home")}
        </Link>
        <LanguageToggle />
      </header>
    );
  }

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
