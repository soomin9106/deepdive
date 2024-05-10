import sanitizeHtml, {IOptions as SanitizeOptions } from 'sanitize-html'

export const allowedTags = [
    'div', 
    'p',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'figure',
    'iframe',
    'a',
    'strong',
    'i',
    'br',
    'img'
]

export const defaultAttributes = ['style', 'class']

export const allowedIframeDomains = ['naver.com', 'www.youtube.com']

export const allowedAttributeForTags : {
    [key in (typeof allowedTags)[number]]: Array<string>
} = {
    iframe: ['src', 'allowfullscreen', 'scrolling', 'frameborder', 'allow'],
    img: ['src', 'alt'],
    a: ['href'],
}

// allowedTags, allowedAttributeForTags, defaultAttributes 를 기반으로 허용할 태그와 속성을 정의
export const allowedAttributes = allowedTags.reduce<SanitizeOptions['allowedAttributes']>((result, tag) => {
    const additionalAttrs = allowedAttributeForTags[tag] || []
    return { ...result, [tag]: [...additionalAttrs, ...defaultAttributes]}
}, {})

export const sanitizedOptions: SanitizeOptions = {
    allowedTags,
    allowedAttributes,
    allowedIframeDomains,
    allowIframeRelativeUrls: true
}
