import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid"

import benefitOneImg from "../../public/img/benefit-one.png"
import benefitTwoImg from "../../public/img/benefit-two.png"

const benefitOne = {
  title: "Focus on your relationship with customer",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Create closer relationship",
      desc: "Interact with your customer through personalized content that fosters trust and rapport.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Send shorts with personalized offers to improve sales conversion.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "Personalized shorts keep customers engaged by providing valuable, consistent content that strengthens loyalty and encourages repeated interactions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
}

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }