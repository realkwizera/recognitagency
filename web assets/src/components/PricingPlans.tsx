import { useState, useRef, useEffect } from "react";
import { PiPlusCircle } from "react-icons/pi";

type Plan = {
  icon: string;
  name: string;
  subtitle: string;
  price: string;
  priceRange?: string;
  description: string;
  features: string[];
  featured?: boolean;
  dark?: boolean;
  ctaLabel: string;
};

const plans: Plan[] = [
  {
    icon: "🥉",
    name: "Bronze",
    subtitle: "Foundation Kit",
    price: "$150",
    priceRange: "– $400",
    description: "Start with a strong, professional identity.",
    features: [
      "Logo design (1–2 concepts)",
      "Brand color palette",
      "Typography system",
      "Business card design",
      "Email signature",
    ],
    ctaLabel: "Get started",
  },
  {
    icon: "🥈",
    name: "Silver",
    subtitle: "Visibility Kit",
    price: "$200",
    priceRange: "– $600",
    description: "Increase visibility and start attracting customers.",
    features: [
      "Everything in Bronze, as add-on",
      "Social graphics pack (5–10 designs)",
      "Flyers & posters",
      "Website banners",
      "Presentation deck",
      "Email campaign template",
    ],
    ctaLabel: "Get started",
  },
  {
    icon: "🏅",
    name: "Gold",
    subtitle: "Growth System",
    price: "$700",
    priceRange: "– $2,000",
    description: "Build a complete brand and marketing system.",
    features: [
      "Full brand identity system",
      "Extended brand guidelines",
      "Corporate templates",
      "Social content kit (10–20 posts)",
      "Infographics & product catalog",
      "Email marketing system",
      "Website (5–8 pages)",
    ],
    featured: true,
    ctaLabel: "Get started",
  },
  {
    icon: "💎",
    name: "Platinum",
    subtitle: "Business Engine",
    price: "$2,500",
    priceRange: "– $7,000",
    description: "Turn your brand into a conversion-driven system.",
    features: [
      "Everything in Gold, enhanced",
      "Packaging design system",
      "Advanced ad creatives (Meta/Google)",
      "Video marketing assets",
      "Press release kit",
      "SEO-optimized website",
      "Conversion landing pages",
      "Analytics setup",
    ],
    ctaLabel: "Get started",
  },
  {
    icon: "🏢",
    name: "Enterprise",
    subtitle: "Legacy System",
    price: "$8,000+",
    description: "Complete transformation of your brand ecosystem.",
    features: [
      "Brand strategy & positioning",
      "Full rebranding system",
      "Brand governance manual",
      "Multi-branch identity system",
      "Enterprise website ecosystem",
      "Multi-language support",
      "Full marketing campaign system",
      "CRM & automation integration",
      "Analytics & reporting dashboards",
      "Corporate video direction",
    ],
    dark: true,
    ctaLabel: "Contact us",
  },
];

type ComparisonRow = {
  feature: string;
  bronze: boolean;
  silver: boolean;
  gold: boolean;
  platinum: boolean;
  enterprise: boolean;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Logo Design",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Brand Color Palette",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Typography System",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Business Card Design",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Email Signature",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },

  // ---- SILVER & ABOVE (marketing assets) ----
  {
    feature: "Social Media Graphics",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Flyers & Posters",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Website Banners",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Presentation Deck",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Email Campaign Template",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },

  // ---- GOLD & ABOVE (brand & web) ----
  {
    feature: "Full Brand Identity System",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Social Media Content Kit",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Infographics",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Email Marketing System",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true, // fixed: Platinum includes Gold’s features
    enterprise: true,
  },
  {
    feature: "Website (5–8 pages)",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true, // fixed: Platinum includes website (enhanced)
    enterprise: true,
  },
  {
    feature: "Mini Brand Guideline",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },

  // ---- PLATINUM & ENTERPRISE (advanced digital) ----
  {
    feature: "Packaging Design System",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Ad Creatives",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Video Marketing Assets",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Landing Pages",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "SEO Website (optimized)",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Analytics Setup",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Basic SEO Setup", // not in Gold, but in Platinum+
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
    enterprise: true,
  },

  // ---- ENTERPRISE ONLY ----
  {
    feature: "Brand Strategy",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
  {
    feature: "Rebranding System",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
  {
    feature: "CRM Integration",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
  {
    feature: "Automation Systems",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
  {
    feature: "Multi‑Language Support",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
  {
    feature: "Analytics Dashboards",
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    enterprise: true,
  },
];

const CheckIcon = () => (
  <svg
    className="mx-auto w-6 h-6 text-green-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    className="mx-auto w-6 h-6 text-red-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
      clipRule="evenodd"
    />
  </svg>
);

export default function PricingPlans() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // New state
  // const [viewMode, setViewMode] = useState<"all" | "upgrades">("all");
  const totalItems = plans.length + 1;
  // Helper to get upgrade pairs
  const upgradePairs = [
    { from: "bronze", to: "silver", fromLabel: "Bronze", toLabel: "Silver" },
    { from: "silver", to: "gold", fromLabel: "Silver", toLabel: "Gold" },
    { from: "gold", to: "platinum", fromLabel: "Gold", toLabel: "Platinum" },
    {
      from: "platinum",
      to: "enterprise",
      fromLabel: "Platinum",
      toLabel: "Enterprise",
    },
  ];

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth =
      container.querySelector("article")?.getBoundingClientRect().width || 0;
    const gap = 32;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex((prev) => Math.min(prev + 1, totalItems - 1));
  };

  function getDiffRows(
    planA: keyof Pick<
      ComparisonRow,
      "bronze" | "silver" | "gold" | "platinum" | "enterprise"
    >,
    planB: keyof Pick<
      ComparisonRow,
      "bronze" | "silver" | "gold" | "platinum" | "enterprise"
    >,
  ) {
    return comparisonRows.filter((row) => row[planA] !== row[planB]);
  }

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth =
        container.querySelector("article")?.getBoundingClientRect().width || 0;
      const gap = 32;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, totalItems - 1));
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalItems]);


  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="text-center mx-auto mb-8 md:mb-12">
        <div className="max-w-2xl md:max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 text-center">
            Choose the Right Plan for Your Brand
          </h2>
        </div>
        <p className="mt-2 md:mt-4 text-gray-500 max-w-2xl md:max-w-7xl mx-auto text-start md:text-center">
          Build, grow, and scale your business with professional branding and
          marketing systems designed for every stage of growth.
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 scrollbar-hide items-end"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-shrink-0 snap-start h-fit rounded-3xl p-6 hover:scale-102 transition-transform duration-400 md:p-8 shadow-sm ${
                plan.featured
                  ? "border-2 border-yellow-600 bg-gray-100 scale-102 hover:shadow-lg hover:scale-105"
                  : plan.dark
                    ? "border border-zinc-800 bg-zinc-900 text-gray-100"
                    : "border border-gray-200 bg-gray-100"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-yellow-600 text-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              )}

              <span className="text-3xl">{plan.icon}</span>

              <h3
                className={`mt-3 md:mt-4 text-2xl font-bold ${plan.dark ? "text-gray-100" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>

              <p
                className={`font-medium ${plan.dark ? "text-yellow-400" : "text-yellow-600"}`}
              >
                {plan.subtitle}
              </p>

              <div className="mt-6">
                <span
                  className={`text-4xl font-bold ${plan.dark ? "text-gray-100" : "text-gray-900"}`}
                >
                  {plan.price}
                </span>
                {plan.priceRange && (
                  <span
                    className={plan.dark ? "text-gray-400" : "text-gray-500"}
                  >
                    {" "}
                    {plan.priceRange}
                  </span>
                )}
              </div>

              <p
                className={`mt-3 text-sm ${plan.dark ? "text-gray-400" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <ul
                className={`space-y-2 mt-8 text-sm ${plan.dark ? "text-gray-300" : "text-gray-600"}`}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={
                        plan.dark ? "text-yellow-400" : "text-yellow-600"
                      }
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full mt-10 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  plan.featured || plan.dark
                    ? "bg-yellow-600 text-white hover:bg-yellow-700"
                    : "border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                }`}
              >
                {plan.ctaLabel}
              </button>
            </article>
          ))}

          <article className="relative min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-shrink-0 snap-start rounded-3xl p-6 md:p-8 shadow-sm border-2 border-dashed border-yellow-600 bg-yellow-50/70 hover:shadow-lg hover:scale-105 transition-all duration-400 min-h-100 flex flex-col items-center justify-center text-center self-center">
            <div>
              <PiPlusCircle size={48} className="text-yellow-600" />
            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              Custom Plan
            </h3>
            <p className="text-gray-600 text-sm max-w-[200px] mt-1">
              Need something tailored? Let’s build a package that fits your
              exact needs.
            </p>
            <button
              type="button"
              className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-xl font-medium hover:bg-yellow-700 transition-colors"
            >
              Contact us
            </button>
            </div>
          </article>
        </div>
        

        <hr className="mx-3 text-gray-100/20" />

        {/* Floating Next Button */}
        {currentIndex < totalItems - 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-600 text-white rounded-full p-3 shadow-lg hover:bg-yellow-700 transition-colors z-10 md:hidden"
            aria-label="Next Plan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        )}
      </div>
      {/* <hr className="border-gray-300/50 border mt-12"/> */}

      <div className="mt-16 md:mt-12 max-w-7xl mx-auto">
        <div className="text-center sticky inset-0 mb-8">
          <h3 className="text-2xl  rounded-full font-bold text-gray-100 py-2">
            Feature Comparison
          </h3>
          <p className="text-gray-500 mt-1">
            See what each plan includes at a glance.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-12 space-y-8 max-w-7xl mx-auto mt-8">
          <div className="">
            <table className="w-full text-sm border border-gray-100 h-fit">
              <thead>
                <tr className="w-full w-fit">
                  <th
                    colSpan={2}
                    className="sticky bg-gray-50 text-yellow-600 left-0 z-20 px-4 py-3 text-left text-gray-100  border-b border-gray-100"
                  >
                    Bronze Plan Feature
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => {
                  if (row.bronze === true) {
                    return (
                      <tr key={row.feature} className={"bg-gray-50/3"}>
                        <td
                          className={`sticky px-4 py-3 font-medium text-gray-50  border-b border-gray-100 `}
                        >
                          {row.feature}
                        </td>

                        <td className="px-4 py-3 text-center text-gray-400  border-b border-gray-100">
                          <CheckIcon />
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          {upgradePairs.map(({ from, to, fromLabel, toLabel }) => {
            // Filter rows where the lower plan has false and the higher has true
            const diffRows = comparisonRows.filter(
              (row) =>
                row[from as keyof ComparisonRow] === false &&
                row[to as keyof ComparisonRow] === true,
            );
            if (diffRows.length === 0) return null;
            return (
              <div key={`${from}-${to}`}>
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  Upgrade from{" "}
                  <span className="text-yellow-600">{fromLabel}</span> →{" "}
                  <span className="text-yellow-600">{toLabel}</span>
                  <span className="font-normal text-gray-500 ml-2">
                    – what you gain
                  </span>
                </h4>
                <div className="">
                  <table className="w-full text-sm border border-gray-100 h-fit">
                    <thead>
                      <tr className="w-full w-fit">
                        <th className="sticky left-0 z-20 px-4 py-3 text-left text-gray-100  border-b border-gray-100">
                          Feature
                        </th>
                        <th className="px-4 py-3 text-center bg-gray-50 text-yellow-600  border-b border-gray-100">
                          {fromLabel}
                        </th>
                        <th className="px-4 py-3 text-center bg-gray-50 text-yellow-600  border-b border-gray-100">
                          {toLabel}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {diffRows.map((row, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <tr
                            key={row.feature}
                            className={isEven ? "" : "bg-gray-50/3"}
                          >
                            <td
                              className={`sticky px-4 py-3 font-medium text-gray-50  border-b border-gray-100 `}
                            >
                              {row.feature}
                            </td>
                            <td className="px-4 py-3 text-center text-gray-400  border-b border-gray-100">
                              <CrossIcon />
                            </td>
                            <td className="px-4 py-3 text-center text-gray-400  border-b border-gray-100">
                              <CheckIcon />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
