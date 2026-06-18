import { useState, useRef, useEffect } from "react";

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
    description: "Perfect for startups and personal brands.",
    features: [
      "Logo design",
      "Brand color palette",
      "Typography system",
      "Business card design",
      "Email signature",
      "Mini brand guideline",
    ],
    ctaLabel: "Get Started",
  },
  {
    icon: "🥈",
    name: "Silver",
    subtitle: "Visibility Kit",
    price: "$200",
    priceRange: "– $600",
    description: "Perfect for businesses ready to gain visibility.",
    features: [
      "Social media graphics",
      "Flyers & posters",
      "Website banners",
      "Presentation deck",
      "Email campaign template",
    ],
    ctaLabel: "Get Started",
  },
  {
    icon: "🥇",
    name: "Gold",
    subtitle: "Growth System",
    price: "$700",
    priceRange: "– $2,000",
    description: "Complete branding, marketing and website ecosystem.",
    features: [
      "Full brand identity system",
      "Social media content kit",
      "Infographics",
      "Email marketing system",
      "Website (5–8 pages)",
      "Basic SEO setup",
    ],
    featured: true,
    ctaLabel: "Get Started",
  },
  {
    icon: "💎",
    name: "Platinum",
    subtitle: "Business Engine",
    price: "$2,500",
    priceRange: "– $7,000",
    description: "Conversion-driven system for scaling revenue.",
    features: [
      "Packaging design system",
      "Ad creatives",
      "Video marketing assets",
      "Landing pages",
      "SEO website",
      "Analytics setup",
    ],
    ctaLabel: "Get Started",
  },
  {
    icon: "🏢",
    name: "Enterprise",
    subtitle: "Legacy System",
    price: "$8,000+",
    description: "Complete transformation and market dominance.",
    features: [
      "Brand strategy",
      "Rebranding system",
      "CRM integration",
      "Automation systems",
      "Multi-language support",
      "Analytics dashboards",
    ],
    dark: true,
    ctaLabel: "Contact Us",
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
    feature: "Branding Identity",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Marketing Assets",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Website",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "Campaign System",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
    enterprise: true,
  },
  {
    feature: "CRM & Automation",
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

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector("article")?.getBoundingClientRect().width || 0;
    const gap = 32;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex((prev) => Math.min(prev + 1, plans.length - 1));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector("article")?.getBoundingClientRect().width || 0;
      const gap = 32;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, plans.length - 1));
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-12 l md:py-24 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 text-center">
          Choose the Right Plan for Your Brand
        </h2>
        <p className="mt-2 md:mt-4 text-gray-500 max-w-2xl mx-auto text-start md:text-center">
          Build, grow, and scale your business with professional branding and
          marketing systems designed for every stage of growth.
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex-shrink-0 snap-start rounded-3xl p-6 hover:scale-102 transition-transform duration-400 md:p-8 shadow-sm ${
                plan.featured
                  ? "border-2 border-yellow-600 bg-white scale-102 hover:shadow-lg hover:scale-105"
                  : plan.dark
                    ? "border border-zinc-800 bg-zinc-900 text-white"
                    : "border border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              )}

              <span className="text-3xl">{plan.icon}</span>

              <h3
                className={`mt-3 md:mt-4 text-2xl font-bold ${plan.dark ? "text-white" : "text-gray-900"}`}
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
                  className={`text-4xl font-bold ${plan.dark ? "text-white" : "text-gray-900"}`}
                >
                  {plan.price}
                </span>
                {plan.priceRange && (
                  <span className={plan.dark ? "text-gray-400" : "text-gray-500"}>
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
        </div>

        {/* Floating Next Button */}
        {currentIndex < plans.length - 1 && (
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

      {/* Permanent Comparison Table with Sticky Feature Column */}
      <div className="mt-16 md:mt-20 max-w-7xl mx-auto overflow-x-auto">
        <div className="text-center sticky inset-0 mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Feature Comparison</h3>
          <p className="text-gray-500 mt-1">See what each plan includes at a glance.</p>
        </div>

        <table className="w-full min-w-[700px] text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              {/* Sticky Feature column header */}
              <th className="sticky left-0 z-20 px-6 py-4 text-left font-medium text-gray-700 bg-gray-50 border-b border-gray-200 rounded-tl-xl">
                Feature
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={`px-4 py-4 text-center border-b ${
                    plan.featured
                      ? "bg-yellow-600 border-yellow-200"
                      : plan.dark
                        ? "bg-zinc-800 border-zinc-700"
                        : "bg-gray-50 border-gray-200"
                  } `}
                >
                  <div
                    className={`flex flex-col items-center gap-1 ${
                      plan.dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <span className="text-2xl">{plan.icon}</span>
                    <span className="font-bold">{plan.name}</span>
                    <span
                      className={`text-xs font-medium ${
                        plan.dark ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    >
                      {plan.subtitle}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        plan.dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => {
              const isEven = i % 2 === 0;
              return (
                <tr key={row.feature} className={isEven ? "bg-white" : "bg-gray-50/50"}>
                  {/* Sticky Feature column cell */}
                  <td
                    className={`sticky left-0 z-10 px-6 py-4 w-40 font-medium text-gray-800 border-b border-gray-100 ${
                      isEven ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {row.feature}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-100">
                    {row.bronze ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-100">
                    {row.silver ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-100 bg-yellow-50/50">
                    {row.gold ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-100">
                    {row.platinum ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-100">
                    {row.enterprise ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}