import ZeroMd from 'zero-md'

function isSkippableUrl(url: string) {
  return (
    !url ||
    /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url) ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  )
}

function resolveAssetUrl(url: string, base: string) {
  if (isSkippableUrl(url)) return url

  try {
    // For README-compatible behavior in your case:
    // "screenshots/home.png"     -> relative to README directory
    // "/screenshots/home.png"    -> also kept under the same repo/ref base
    return new URL(url.replace(/^\/+/, ''), base).href
  } catch {
    return url
  }
}

function rewriteHtmlUrls(html: string, base: string) {
  return html.replace(
    /\b(src|href)=["']([^"']+)["']/gi,
    (_match, attr: string, value: string) => {
      return `${attr}="${resolveAssetUrl(value, base)}"`
    }
  )
}

function baseUrlResolver(base: string) {
  return {
    walkTokens(token: {
      type: string
      href?: string
      raw?: string
      text?: string
    }) {
      // Markdown images: ![alt](path)
      if ((token.type === 'image' || token.type === 'link') && token.href) {
        token.href = resolveAssetUrl(token.href, base)
        return
      }

      // Raw HTML: <img src="screenshots/home.png">
      if (token.type === 'html') {
        if (token.raw) {
          token.raw = rewriteHtmlUrls(token.raw, base)
        }

        if (token.text) {
          token.text = rewriteHtmlUrls(token.text, base)
        }
      }
    }
  }
}

export default defineNuxtPlugin(() => {
  if (customElements.get('zero-md')) return

  class ThemedZeroMd extends ZeroMd {
    override async load() {
      await super.load({
        markedBaseUrl: async () => {
          return (base: string) => baseUrlResolver(base)
        }
      })

      this.template =
        `<link rel="stylesheet" href="/markdown/main.css">` +
        `<link rel="stylesheet" href="/katex/main.css">`
    }
  }

  customElements.define('zero-md', ThemedZeroMd)
})
