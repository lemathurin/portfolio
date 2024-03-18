import Link from "next/link";
import { useTranslations } from "next-intl";
import ContactList from "../components/ContactList";

export default function Contact() {
  const c = useTranslations("Contact");
  return (
    <div className="w-screen h-screen flex items-start justify-center bg-lightMode-background">
      <ContactList
        email={c("email")}
        linkedin={c("linkedin")}
        github={c("github")}
        twitter={c("twitter")}
        dribbble={c("dribbble")}
        layers={c("layers")}
        readcv={c("readcv")}
        clipboard={c("clipboard")}
      />
    </div>
  );
}
