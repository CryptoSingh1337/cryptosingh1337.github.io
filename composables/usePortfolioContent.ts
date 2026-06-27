import {portfolioContent, SupportedLocale} from '@/utils/data'

export function usePortfolioContent() {
  const {locale} = useI18n()

  return computed(() => portfolioContent[locale.value as SupportedLocale] ?? portfolioContent.en)
}
