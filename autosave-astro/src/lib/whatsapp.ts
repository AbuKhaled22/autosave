import type { Language } from './i18n';

export const WHATSAPP_NUMBER = '966537133080';
export const DROP_OFF_CALENDLY_URL = 'https://calendly.com/autosave45/30min';

const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return WHATSAPP_BASE_URL;
  }

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function getContactInquiryMessage(lang: Language): string {
  return lang === 'ar'
    ? 'مرحباً فريق أوتو سيف، لدي استفسار وأرغب بالتواصل عبر واتساب.'
    : 'Hello Auto Save team, I have an inquiry and would like to connect via WhatsApp.';
}

export function getPickupReturnMessage(lang: Language): string {
  return lang === 'ar'
    ? 'مرحباً فريق أوتو سيف، أرغب في طلب خدمة الاستلام والإرجاع لسيارتي. الرجاء تزويدي بالخطوات المتاحة وأقرب موعد مناسب.'
    : 'Hello Auto Save team, I would like to request Pickup & Return service for my car. Please share the available steps and the earliest suitable appointment.';
}

export function getGeneralContactWhatsAppUrl(lang: Language): string {
  return getWhatsAppUrl(getContactInquiryMessage(lang));
}

export function getPickupReturnWhatsAppUrl(lang: Language): string {
  return getWhatsAppUrl(getPickupReturnMessage(lang));
}

export const WHATSAPP_DISPLAY_NUMBER = '+966 53 713 3080';