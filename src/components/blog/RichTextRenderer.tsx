import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS, Document } from '@contentful/rich-text-types'

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold text-white">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline underline-offset-4">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-accent-primary">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 leading-relaxed text-text-secondary last:mb-0">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="mb-8 mt-12 font-display text-4xl font-bold text-white leading-tight">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mb-6 mt-10 font-display text-3xl font-bold text-white leading-tight">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mb-4 mt-8 font-display text-2xl font-bold text-white leading-snug">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mb-6 list-inside list-disc space-y-2 text-text-secondary pl-4 marker:text-accent-primary">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="mb-6 list-inside list-decimal space-y-2 text-text-secondary pl-4 marker:text-accent-primary">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="my-8 border-l-4 border-accent-primary bg-bg-secondary p-6 text-lg italic text-text-primary rounded-r-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-border-subtle" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // Pour les images Contentful
      const { title, file } = node.data.target.fields || {}
      if (!file?.url) return null
      
      return (
        <figure className="my-10">
          <img
            src={`https:${file.url}`}
            alt={title || ''}
            className="w-full rounded-2xl border border-border-subtle"
            loading="lazy"
          />
          {title && <figcaption className="mt-3 text-center text-sm text-text-muted">{title}</figcaption>}
        </figure>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent-primary underline underline-offset-4 transition-colors hover:text-white"
      >
        {children}
      </a>
    ),
  },
}

export default function RichTextRenderer({ content }: { content: Document }) {
  if (!content) return null
  return <div className="rich-text-container">{documentToReactComponents(content, options)}</div>
}
