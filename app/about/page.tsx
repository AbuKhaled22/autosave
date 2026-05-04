import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Search, Award, Users, Target, Zap } from "lucide-react"
import { ComingSoonLink } from "@/components/coming-soon-link"
import { Button } from "@/components/ui/button"
import { getCurrentContent, getCurrentLanguage } from "@/lib/i18n"
import { localizeHref, withLanguagePrefix } from "@/lib/language"

export async function generateMetadata(): Promise<Metadata> {
  const language = await getCurrentLanguage()
  const baseUrl = "https://coolcar-ac.com"
  const pagePath = "/about"
  const canonicalUrl = `${baseUrl}${withLanguagePrefix(pagePath, language)}`
  const alternates = {
    canonical: canonicalUrl,
    languages: {
      en: `${baseUrl}/en/about`,
      ar: `${baseUrl}/ar/about`,
      "x-default": `${baseUrl}/en/about`,
    },
  }

  if (language === "ar") {
    return {
      title: "من نحن | خدمة إصلاح مكيف السيارة",
      description: "تعرف على اوتو سيف وكيف نوفر أفضل أسعار لقطع المكيف عبر مراكز خدمة معتمدة.",
      alternates,
      openGraph: {
        title: "من نحن | اوتو سيف",
        description: "افضل ورشة إصلاح مكيف السيارة بضمان اقل سعر لقطع غيار عالية الجودة.",
        url: canonicalUrl,
      },
    }
  }

  return {
    title: "About Our Car AC Repair Service",
    description:
      "Learn about AUTO SAVE — how we connect car owners with certified service maintenance centers, guarantee best prices on AC spare parts, and ensure quality auto air conditioning repair.",
    alternates,
    openGraph: {
      title: "About AUTO SAVE | Trusted Car Air Conditioning Repair",
      description:
        "We connect car owners with certified AC service maintenance centers and guarantee the best prices on spare parts. Learn about our process.",
      url: canonicalUrl,
    },
  }
}

const valueIcons = [Target, ShieldCheck, Zap]
const pointIcons = [Search, ShieldCheck, Award, Users]

export default async function AboutPage() {
  const { content, language } = await getCurrentContent()
  const about = content.about
  const isArabic = language === "ar"

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-car.jpeg"
            alt="Certified mechanic performing car AC compressor repair in a professional workshop"
            fill
            className="object-cover opacity-38"
          />
          <div
            className={
              isArabic
                ? "absolute inset-0 bg-gradient-to-l from-foreground/85 via-foreground/70 to-foreground/50"
                : "absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50"
            }
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {about.heroEyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {about.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              {about.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {about.missionEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
                {about.missionTitle}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {about.missionParagraphs[0]}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {about.missionParagraphs[1]}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {about.missionPoints.map((point, index) => {
                  const Icon = pointIcons[index] ?? Search

                  return (
                    <div key={point} className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{point}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/images/hero-car.jpeg"
                alt="Certified auto AC technician inspecting a car air conditioning system"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {about.valuesEyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-secondary-foreground text-balance md:text-4xl">
              {about.valuesTitle}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Target

              return (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Price Comparison Process */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {about.processEyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
              {about.processTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {about.processDescription}
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-8">
            {about.processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-6 rounded-2xl border border-border bg-card p-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground text-balance md:text-4xl">
            {about.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {about.ctaDescription}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ComingSoonLink href={localizeHref("/contact", language)}>
              <Button size="lg" className="gap-2 bg-background text-foreground hover:bg-background/90">
                {about.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ComingSoonLink>
          </div>
        </div>
      </section>
    </>
  )
}
