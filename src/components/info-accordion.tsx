"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import Background from "../../public/faq/faq-bg.jpg";

export default function InfoAccordion() {
  const t = useTranslations("infoAccordion");
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  const faqs = [
    {
      question: t("questions.q1"),
      answer: t("answers.a1"),
    },
    {
      question: t("questions.q2"),
      answer: t("answers.a2"),
    },
    {
      question: t("questions.q3"),
      answer: t("answers.a3"),
    },
    {
      question: t("questions.q4"),
      answer: t("answers.a4"),
    },
    {
      question: t("questions.q5"),
      answer: t("answers.a5"),
    },
  ];

  return (
    <section
      ref={container}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <Image
          src={Background}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      <div className="relative z-10  max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white leading-tight mb-8">
            {t("title")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <Accordion type="single" collapsible className="text-white">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
