import Image from "next/image"

type RichTextItem = {
  type: "text"
  text: { content: string; link?: { url: string } | null }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href?: string | null
}

function RichText({ items }: { items: RichTextItem[] }) {
  return (
    <>
      {items.map((item, i) => {
        const { bold, italic, strikethrough, underline, code } = item.annotations
        let content: React.ReactNode = item.plain_text

        if (code) {
          content = (
            <code key={i} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-[#1e3a5f]">
              {content}
            </code>
          )
        } else {
          const classes = [
            bold ? "font-bold" : "",
            italic ? "italic" : "",
            strikethrough ? "line-through" : "",
            underline ? "underline" : "",
          ]
            .filter(Boolean)
            .join(" ")

          if (item.href) {
            content = (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`text-[#1e3a5f] underline ${classes}`}>
                {content}
              </a>
            )
          } else if (classes) {
            content = <span key={i} className={classes}>{content}</span>
          }
        }

        return <span key={i}>{content}</span>
      })}
    </>
  )
}

export function NotionRenderer({ blocks }: { blocks: any[] }) {
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < blocks.length) {
    const block = blocks[i]

    if (block.type === "numbered_list_item") {
      const listItems: React.ReactNode[] = []
      while (i < blocks.length && blocks[i].type === "numbered_list_item") {
        listItems.push(
          <li key={blocks[i].id} className="leading-relaxed text-[#555]">
            <RichText items={blocks[i].numbered_list_item.rich_text} />
          </li>
        )
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="ml-6 list-decimal space-y-1.5">
          {listItems}
        </ol>
      )
      continue
    }

    if (block.type === "bulleted_list_item") {
      const listItems: React.ReactNode[] = []
      while (i < blocks.length && blocks[i].type === "bulleted_list_item") {
        listItems.push(
          <li key={blocks[i].id} className="leading-relaxed text-[#555]">
            <RichText items={blocks[i].bulleted_list_item.rich_text} />
          </li>
        )
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="ml-6 list-disc space-y-1.5">
          {listItems}
        </ul>
      )
      continue
    }

    switch (block.type) {
      case "paragraph":
        elements.push(
          <p key={block.id} className="leading-relaxed text-[#555]">
            <RichText items={block.paragraph.rich_text} />
          </p>
        )
        break

      case "heading_1":
        elements.push(
          <h2 key={block.id} className="text-2xl font-bold text-[#1e3a5f]">
            <RichText items={block.heading_1.rich_text} />
          </h2>
        )
        break

      case "heading_2":
        elements.push(
          <h3 key={block.id} className="text-xl font-semibold text-[#1e3a5f]">
            <RichText items={block.heading_2.rich_text} />
          </h3>
        )
        break

      case "heading_3":
        elements.push(
          <h4 key={block.id} className="text-lg font-semibold text-[#1e3a5f]">
            <RichText items={block.heading_3.rich_text} />
          </h4>
        )
        break

      case "divider":
        elements.push(<hr key={block.id} className="border-slate-200" />)
        break

      case "image": {
        const url =
          block.image.type === "file"
            ? block.image.file.url
            : block.image.external.url
        const caption =
          block.image.caption?.map((c: RichTextItem) => c.plain_text).join("") ?? ""
        elements.push(
          <figure key={block.id} className="overflow-hidden rounded-xl">
            <div className="relative aspect-video w-full">
              <Image
                src={url}
                alt={caption || "Protocol image"}
                fill
                className="object-contain"
              />
            </div>
            {caption && (
              <figcaption className="mt-2 text-center text-sm text-[#888]">{caption}</figcaption>
            )}
          </figure>
        )
        break
      }

      case "code":
        elements.push(
          <pre key={block.id} className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
            <code>{block.code.rich_text.map((r: RichTextItem) => r.plain_text).join("")}</code>
          </pre>
        )
        break

      default:
        break
    }

    i++
  }

  return <div className="space-y-4">{elements}</div>
}
