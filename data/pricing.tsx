import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description: "Flexible ",
  plans: [
    {
      id: "oss",
      title: "Open Source",
      description: "Bring your own data and compute!",
      price: "Free",
      features: [
        {
          title: "Amazing frontend for understanding governments.",
        },
        {
          title: "Use with your own datasets.",
        },
        {
          title: "Self Hosted",
        },
        {
          title: "MIT License",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "main",
      title: "Bootstrap",
      description: "Complete frontend stack for bootstrappers and small teams.",
      price: "50 $ per User",
      isRecommended: true,
      features: [
        {
          title: "One project",
        },
        {
          title: "One developer",
        },
        {
          title: "Advanced components",
        },
        {
          title: "Multiple themes",
        },
        {
          title: "Next.js and Electron boilerplates",
        },
        {
          title: "Private discord community",
        },
        {
          title: "Every feature in the OSS tier.",
        },
        null,
        {
          title: "Private beta access",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "/contact",
      },
    },
    {
      id: "enterprise",
      title: "Startup",
      description: "Unlimited license for growing teams.",
      price: "Contact Us",
      features: [
        {
          title: "Unlimited projects",
        },
        {
          title: "Unlimited developers",
        },
        {
          title: "1 year of updates",
        },
        {
          title: "Everything from Bootstrap",
        },
        null,
        {
          title: "Private beta access",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "/contact",
      },
    },
  ],
};
