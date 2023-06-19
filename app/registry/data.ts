import {
  HoneyMoon,
  Wine,
  Art,
  Charity,
  Gym,
  Spa,
} from "@/app/registry/components/FeatureCard";

const registry = [
  {
    id: "honeymoon",
    title: "Honeymoon Fund",
    description: "Help us get to Costa Rica for our dream honeymoon",
    card: HoneyMoon,
  },
  {
    id: "wine",
    title: "Wine Subscription",
    description: "Keep our wine rack stocked with a monthly subscription",
    card: Wine,
  },
  {
    id: "artwork",
    title: "Artwork",
    description: "Help us decorate our walls with beautiful artwork",
    card: Art,
  },
  {
    id: "gym",
    title: "Gym Membership",
    description: "Help us stay fit and healthy with some home workout gear",
    card: Gym,
  },
  {
    id: "charity",
    title: "Charitable Donation",
    description: "Make a donation to a cause we care about in our name",
    card: Charity,
  },
  {
    id: "spa",
    title: "Spa Package",
    description: "A relaxing spa day for post-wedding relaxation",
    card: Spa,
  },
];

export default registry;
