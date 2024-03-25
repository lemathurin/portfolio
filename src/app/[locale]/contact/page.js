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
      <meta property="og:image" content="/ogimages/contact.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </div>
  );
}
