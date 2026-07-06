import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
import type { IconType } from "react-icons";

const map: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? FaGithub;
  return <Icon className={className} />;
}
