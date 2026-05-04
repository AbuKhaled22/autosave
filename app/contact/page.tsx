import type { Metadata } from "next"
import Image from "next/image"
import { Phone, MapPin, Clock, MessageCircle, ArrowRight, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ComingSoonLink } from "@/components/coming-soon-link"
import { getCurrentContent, getCurrentLanguage } from "@/lib/i18n"
import { withLanguagePrefix } from "@/lib/language"

export async function generateMetadata(): Promise<Metadata> {
  const language = await getCurrentLanguage()
  const baseUrl = "https://coolcar-ac.com"
  const pagePath = "/contact"
  const canonicalUrl = `${baseUrl}${withLanguagePrefix(pagePath, language)}`
  const alternates = {
    canonical: canonicalUrl,
    languages: {
      en: `${baseUrl}/en/contact`,
      ar: `${baseUrl}/ar/contact`,
      "x-default": `${baseUrl}/en/contact`,
    },
  }

  if (language === "ar") {
    return {
      title: "تواصل معنا | طلب خدمة مكيف السيارة",
      description:
        "اطلب خدمة إصلاح مكيف السيارة أو احصل على عرض سعر سريع عبر واتساب. وضمان أفضل سعر.",
      keywords: ["تواصل", "إصلاح مكيف", "طلب خدمة", "عرض سعر", "مكيف السيارة"],
      alternates,
      openGraph: {
        title: "تواصل معنا | اوتو سيف",
        description:
          "اطلب خدمة إصلاح مكيف السيارة أو احصل على عرض سعر سريع عبر واتساب. وضمان أفضل سعر.",
        url: canonicalUrl,
        type: "website",
      },
    }
  }

  return {
    title: "Contact Us | Request Car AC Service",
    description:
      "Request a car AC repair service, get a free quote, or reach us on WhatsApp. Certified service maintenance centers, best price guarantee, and pickup service available.",
    keywords: [
      "contact car AC repair",
      "request AC service",
      "car AC repair quote",
      "auto AC service near me",
      "car air conditioning appointment",
    ],
    alternates,
    openGraph: {
      title: "Contact Us | AUTO SAVE",
      description:
        "Request a car AC repair service, get a free quote, or reach us on WhatsApp. Certified service maintenance centers and best price guarantee.",
      url: canonicalUrl,
      type: "website",
    },
  }
}

export default async function ContactPage() {
  const { content, language } = await getCurrentContent()
  const isArabic = language === "ar"
  const contact = content.contact
  const dropOffBookMessage = isArabic
    ? "مرحباً، أود حجز خدمة تسليم السيارة للمركز"
    : "Hi, I want to book the Drop-off at maintenance center option"
  const pickupBookMessage = isArabic
    ? "مرحباً، أود حجز خدمة استلام السيارة من موقعي"
    : "Hi, I want to book the Pickup from your location option"

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-car-ac2.jpeg"
            alt="Car air conditioning dashboard with cool air flowing from vents"
            fill
            className="object-cover opacity-38"
            priority
          />
          <div
            className={
              isArabic
                ? "absolute inset-0 bg-gradient-to-l from-foreground/85 via-foreground/70 to-foreground/50"
                : "absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50"
            }
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {contact.heroEyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {contact.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              {contact.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {contact.formTitle}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {contact.formDescription}
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-3">
                <div className="space-y-3">
                  <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{contact.dropOff}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">؟؟</p>
                    </div>
                    <ComingSoonLink
                      href={`https://wa.me/?text=${encodeURIComponent(dropOffBookMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button className="gap-2">
                        {contact.bookNow}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </ComingSoonLink>
                  </div>

                  <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{contact.pickup}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">???</p>
                    </div>
                    <ComingSoonLink
                      href={`https://wa.me/?text=${encodeURIComponent(pickupBookMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button className="gap-2">
                        {contact.bookNow}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </ComingSoonLink>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{contact.pricingNote}</p>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{contact.whatsappTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {contact.whatsappDescription}
                </p>
                <ComingSoonLink
                  href="https://wa.me/?text=Hi%2C%20I%20need%20help%20with%20my%20car%20AC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="mt-6 w-full gap-2 bg-background text-foreground hover:bg-background/90"
                  >
                    {contact.openWhatsapp}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </ComingSoonLink>
              </div>

              {/* Contact Info Cards */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{contact.contactInfoTitle}</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{contact.phoneLabel}</div>
                      <div className="text-sm text-muted-foreground">+966 50 000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{contact.serviceAreaLabel}</div>
                      <div className="text-sm text-muted-foreground">{contact.serviceAreaValue}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{contact.hoursLabel}</div>
                      <div className="text-sm text-muted-foreground">{contact.hoursWeek}</div>
                      <div className="text-sm text-muted-foreground">{contact.hoursWeekend}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Quick View */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{contact.pricingTitle}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                    <span className="text-sm text-secondary-foreground">{contact.dropOff}</span>
                    <Badge className="bg-primary text-primary-foreground">؟؟</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-secondary p-3">
                    <span className="text-sm text-secondary-foreground">{contact.pickup}</span>
                    <Badge className="bg-primary text-primary-foreground">???</Badge>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {contact.pricingNote}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Snowflake className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{contact.guaranteeTitle}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {contact.guarantees.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground">
              {contact.citiesTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {contact.citiesDescription}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {contact.cities.map((city) => (
              <div
                key={city}
                className="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-6 text-center"
              >
                <div>
                  <MapPin className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-2 font-medium text-foreground">{city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
