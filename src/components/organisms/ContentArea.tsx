import { useActiveLink } from "@/context/LinkContext";
import Dasshboard from "./Dasshboard";
import SkillTest from "./SkillTest";
import Internship from "./Internship";

export default function ContentArea() {
  const { activeLink } = useActiveLink();

  if (activeLink === "Skill Test") {
    return <SkillTest />;
  }

  if (activeLink === "Internship") {
    return <Internship />;
  }

  return <Dasshboard />;
}
