import { useState } from "react";

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
  const [openComparison, setOpenComparison] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Choose the Right Plan for Your Brand
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Build, grow, and scale your business with professional branding and
          marketing systems designed for every stage of growth.
        </p>
        <button
          type="button"
          onClick={() => setOpenComparison(true)}
          className="mt-8 text-yellow-600 font-medium underline underline-offset-2 hover:text-yellow-700 transition-colors cursor-pointer bg-transparent border-none"
        >
          View Comparison Table
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-3xl p-8 shadow-sm ${
              plan.featured
                ? "border-2 border-yellow-600 bg-white scale-105"
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
              className={`mt-4 text-2xl font-bold ${plan.dark ? "text-white" : "text-gray-900"}`}
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

      {/* Comparison Modal */}
      {openComparison && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setOpenComparison(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Compare Plans
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                  Choose the package that best fits your business.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenComparison(false)}
                className="text-2xl leading-none text-gray-400 hover:text-red-500 transition-colors bg-transparent border-none cursor-pointer"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Modal Table */}
            <div className="overflow-x-auto overflow-y-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-zinc-900 text-white">
                    <th className="px-6 py-5 text-left font-medium w-48">
                      Feature
                    </th>
                    <th className="px-6 py-5 text-center font-medium">
                      🥉 Bronze
                    </th>
                    <th className="px-6 py-5 text-center font-medium">
                      🥈 Silver
                    </th>
                    <th className="px-6 py-5 text-center font-medium bg-yellow-600">
                      🥇 Gold
                    </th>
                    <th className="px-6 py-5 text-center font-medium">
                      💎 Platinum
                    </th>
                    <th className="px-6 py-5 text-center font-medium">
                      🏢 Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-5 font-medium text-gray-800">
                        {row.feature}
                      </td>
                      <td className="px-6 py-5">
                        {row.bronze ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="px-6 py-5">
                        {row.silver ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="px-6 py-5">
                        {row.gold ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="px-6 py-5">
                        {row.platinum ? <CheckIcon /> : <CrossIcon />}
                      </td>
                      <td className="px-6 py-5">
                        {row.enterprise ? <CheckIcon /> : <CrossIcon />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
