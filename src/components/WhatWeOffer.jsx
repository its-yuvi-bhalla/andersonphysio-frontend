import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  MoveRight,
  Accessibility,
  HeartPulse,
  Handshake,
  TrendingUp,
} from "lucide-react";

const offerings = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
    iconBg: "bg-blue-100",
    title: "Provide Exceptional Patient Care",
    description:
      "Evidence-based physiotherapy tailored to individual needs for faster recovery and long-term wellness.",
  },
  {
    icon: <MoveRight className="w-6 h-6 text-green-600" />,
    iconBg: "bg-green-100",
    title: "Enhance Mobility and Pain Management",
    description:
      "Restore strength and mobility while reducing pain through personalized therapy.",
  },
  {
    icon: <Accessibility className="w-6 h-6 text-amber-500" />,
    iconBg: "bg-amber-100",
    title: "Welcoming and Accessible Clinic",
    description:
      "Comfortable, inclusive space with wheelchair access and modern design.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-red-600" />,
    iconBg: "bg-red-100",
    title: "Promote Preventative Healthcare",
    description:
      "Educating patients on injury prevention and healthy movement habits.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-100",
    title: "Expand Community Outreach",
    description:
      "Partnering with gyms and wellness providers to spread physiotherapy awareness.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-100",
    title: "Sustainable Business Growth",
    description:
      "Build a strong client base with satisfied patients and sound management.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#f1f1f1] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
        <p className="text-lg text-gray-600 mb-14">
          Exceptional physiotherapy care for your wellness
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offerings.map((item, index) => (
            <Link to="/services" key={index}>
              <div className="relative cursor-pointer bg-[#f9fbfd] border border-gray-200 hover:border-blue-300 hover:ring-2 hover:ring-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <div className={`flex items-center justify-center size-12 mb-4 mx-auto rounded-full ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
