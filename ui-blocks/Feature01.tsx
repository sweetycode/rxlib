import { ArrowRightIcon } from "common-icons/icons";
import { asComponent, type CcProps } from "common-ui/decl";
import { ccx } from "common-utils/cx";

const styles = {
  feature01: "max-w-screen-lg mx-auto px-4",
  container: "py-8",
  hero: "flex flex-col items-center mx-auto max-w-2xl",
  heroTagline: "rounded-full bg-zinc-50 border border-zinc-150 text-xs px-2 py-0.5 text-zinc-500",
  heroTitle: "pt-4 pb-6 text-3xl font-bold text-center",
  heroDescription: "text-zinc-500 text-sm",
  heroButton: "bg-zinc-900 text-white px-4 py-2 rounded-lg mt-4 hover:bg-zinc-900/90 shadow inline-flex items-center group hover:shadow-md",

  feats: "mt-10 grid grid-cols-2 gap-8",
  feat: "border border-zinc-200 bg-zinc-50/50 p-4 rounded-lg",
  featTitle: "text-lg font-semibold",
  featDescription: "text-sm text-zinc-500 mt-2",
};

const Feature01 = asComponent("div", styles.feature01);
const Container = asComponent("div", styles.container);

const Hero = asComponent("div", styles.hero);
const HeroTagline = asComponent("div", styles.heroTagline);
const HeroTitle = asComponent("h1", styles.heroTitle);
const HeroDescription = asComponent("p", styles.heroDescription);
function HeroButton({className, children, href}: CcProps & {href?: string}) {
  return <a href={href} className={ccx(styles.heroButton, className)}>{children}<ArrowRightIcon className="group-hover:translate-x-1 group-hover:scale-110 transition-all" size="24"/></a>
}

const Feats = asComponent("div", styles.feats);
const Feat = asComponent("div", styles.feat);
const FeatTitle = asComponent("h2", styles.featTitle);
const FeatDescription = asComponent("p", styles.featDescription);

export default Object.assign(Feature01, {
  Container,
  Hero,
  HeroTagline,
  HeroTitle,
  HeroDescription,
  HeroButton,
  Feats,
  Feat,
  FeatTitle,
  FeatDescription,
});
