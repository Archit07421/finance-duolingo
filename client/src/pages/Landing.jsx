import { Link } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { CloudShader } from "@/components/ui/cloud-shader";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


const features = [
  {
    quote:
      "Master stocks, ETFs, mutual funds, bonds, and investing fundamentals through short, interactive lessons designed for beginners.",
    name: "Interactive Learning",
    designation: "Learn finance step by step",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },

  {
    quote:
      "Turn financial learning into a habit. Complete lessons and quizzes, earn XP, maintain your streak, and unlock achievement badges as you progress.",
    name: "XP, Streaks & Badges",
    designation: "Make learning rewarding",
    src: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
  },

  {
    quote:
      "Ask questions about investing in plain English and get simple, beginner-friendly explanations without getting overwhelmed by financial jargon.",
    name: "AI Finance Coach",
    designation: "Your personal finance guide",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },

  {
    quote:
      "Analyze suspicious financial messages and investment claims while learning how to recognize common warning signs and scam red flags.",
    name: "Scam Detector",
    designation: "Learn to spot financial scams",
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
];


export default function Landing() {

  return (

    <div className="min-h-svh bg-black text-white">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden">


        {/* -------------------------------------------------
            CLOUD SHADER BACKGROUND
        ------------------------------------------------- */}

        <div className="absolute inset-0 z-0">

          <CloudShader
            className="h-full w-full"
          />

        </div>


        {/* -------------------------------------------------
            DARK OVERLAY
        ------------------------------------------------- */}

        <div className="absolute inset-0 z-10 bg-black/55" />


        {/* -------------------------------------------------
            BOTTOM FADE
        ------------------------------------------------- */}

        <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black to-transparent" />


        {/* =================================================
            NAVBAR
        ================================================= */}

        <LandingNavbar/>
        


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-4 pb-20 pt-44 text-center sm:px-6">


          <div className="mx-auto max-w-4xl">


            {/* Badge */}

            <p
              className="
                mx-auto
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/30
                bg-blue-500/10
                px-4
                py-1.5
                text-sm
                text-blue-300
                backdrop-blur-md
              "
            >

              <Award className="h-4 w-4" />

              Duolingo-style financial literacy

            </p>


            {/* Heading */}

            <h1
              className="
                text-4xl
                font-extrabold
                leading-tight
                tracking-tight
                sm:text-6xl
              "
            >

Learn finance. Build confidence.

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-blue-300
                  via-blue-400
                  to-blue-600
                  bg-clip-text
                  sm:text-5xl
                  text-transparent
                "
              >
                Your journey to smarter investing starts here.

              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-300
              "
            >

              Learn finance, understand investing, and build
              the confidence to make smarter financial
              decisions — one step at a time.

            </p>


            {/* Buttons */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >

              <Link
                to="/login"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-8
                  py-3.5
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/25
                  transition-all
                  hover:bg-blue-500
                  hover:shadow-blue-500/30
                "
              >

                Start Learning

                <ArrowRight className="h-5 w-5" />

              </Link>


              <a
                href="#features"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-700
                  bg-black/20
                  px-8
                  py-3.5
                  text-base
                  font-semibold
                  text-slate-300
                  backdrop-blur-sm
                  transition-colors
                  hover:border-slate-500
                  hover:text-white
                "
              >

                Explore Features

              </a>

            </div>


            {/* Small trust text */}

            <p className="mt-6 text-xs text-slate-500">

              Interactive learning • AI guidance • Quizzes • Progress tracking

            </p>

          </div>

        </div>

      </section>

     


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section
        id="features"
        className="relative z-20 bg-black px-4 py-20 sm:px-6"
      >

        <div className="mx-auto max-w-6xl">


          {/* Section heading */}

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-medium text-blue-400">
              EVERYTHING YOU NEED
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">

              Learn finance without the overwhelm.

            </h2>

            <p className="mt-4 text-slate-400">

              InvestQuest turns complicated financial concepts
              into simple, interactive learning experiences.

            </p>

          </div>


          {/* Feature cards */}

          
          <div className="mt-14">
  <AnimatedTestimonials
    testimonials={features}
    autoplay={true}
  />
</div>
             

        </div>

      </section>

      {/* =====================================================
    FAQ
===================================================== */}

<section
  id="faq"
  className="relative bg-black px-4 py-24 sm:px-6"
>
  <div className="mx-auto max-w-3xl">

    {/* Heading */}
    <div className="mb-12 text-center">

      <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
        Frequently Asked Questions
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Everything you need to know.
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-slate-400">
        New to investing? Here are some common questions
        about how InvestQuest works.
      </p>

    </div>

    {/* FAQ */}
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
    >

      {/* Question 1 */}
      <AccordionItem
        value="item-1"
        className="rounded-xl border border-slate-800 bg-slate-900/50 px-5"
      >
        <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
          Is InvestQuest financial advice?
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-6 text-slate-400">
          No. InvestQuest is an educational platform designed
          to help beginners understand financial concepts.
          It does not provide personalized financial advice.
        </AccordionContent>
      </AccordionItem>

      {/* Question 2 */}
      <AccordionItem
        value="item-2"
        className="rounded-xl border border-slate-800 bg-slate-900/50 px-5"
      >
        <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
          Do I need prior investing knowledge?
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-6 text-slate-400">
          Not at all. InvestQuest starts with the fundamentals
          and gradually builds your understanding through
          interactive lessons, quizzes and challenges.
        </AccordionContent>
      </AccordionItem>

      {/* Question 3 */}
      <AccordionItem
        value="item-3"
        className="rounded-xl border border-slate-800 bg-slate-900/50 px-5"
      >
        <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
          Can I actually invest through InvestQuest?
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-6 text-slate-400">
          No. InvestQuest focuses on financial education.
          It helps you understand investing concepts so you
          can make more informed decisions on your own.
        </AccordionContent>
      </AccordionItem>

      {/* Question 4 */}
      <AccordionItem
        value="item-4"
        className="rounded-xl border border-slate-800 bg-slate-900/50 px-5"
      >
        <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
          What can I learn on InvestQuest?
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-6 text-slate-400">
          You can learn about stocks, ETFs, mutual funds,
          bonds, risk, investing basics and common financial
          scams through interactive learning experiences.
        </AccordionContent>
      </AccordionItem>

      {/* Question 5 */}
      <AccordionItem
        value="item-5"
        className="rounded-xl border border-slate-800 bg-slate-900/50 px-5"
      >
        <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
          How does the learning system work?
        </AccordionTrigger>

        <AccordionContent className="text-sm leading-6 text-slate-400">
          Start with beginner-friendly lessons, test your
          knowledge through quizzes and challenges, and
          progress through the platform while earning XP
          and achievements.
        </AccordionContent>
      </AccordionItem>

    </Accordion>

  </div>
</section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          border-t
          border-slate-800
          bg-black
          py-6
          text-center
          text-sm
          text-slate-500
        "
      >

        InvestQuest — Educational platform only.
        Not financial advice.

      </footer>


    </div>
  );
}