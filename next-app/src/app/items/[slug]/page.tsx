import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoriesForSlug,
  getCategoryFor,
  getItem,
  getOverviewItems,
  isOverviewSlug,
  items,
} from "@/data/items";
import ItemsSidebar from "@/components/ItemsSidebar";

export function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItem(params.slug);
  if (!item) return { title: "대성단열" };
  return {
    title: `${item.title} — 대성단열`,
    description: item.intro,
  };
}

export default function ItemPage({ params }: { params: { slug: string } }) {
  const item = getItem(params.slug);
  if (!item) notFound();

  const category = getCategoryFor(params.slug);

  return (
    <section className="items">
      <div className="ds-container-0">
        <div className="i-wrap-01">
          <ItemsSidebar
            categories={getCategoriesForSlug(params.slug)}
            currentSlug={params.slug}
            initialOpenSlug={category?.slug ?? null}
          />

          <div className="vertical_tab_content" data-slug={params.slug}>
            <div className="v-t-header">
              <h2>{isOverviewSlug(params.slug) ? item.title : item.subtitle}</h2>
            </div>
            <div className="v-t-content">
              {isOverviewSlug(params.slug) && (
                <div className="v-t-overview-grid">
                  {getOverviewItems(params.slug).map((it) => (
                    <Link
                      key={it.slug}
                      href={`/items/${it.slug}`}
                      className="v-t-overview-card"
                    >
                      <div className="v-t-overview-thumb">
                        <img src={it.image} alt={it.label} />
                      </div>
                      <div className="v-t-overview-label">{it.label}</div>
                    </Link>
                  ))}
                </div>
              )}
              {!isOverviewSlug(params.slug) && item.mainImage && (
                <div className="v-t-main-img">
                  <img src={item.mainImage} alt={item.title} />
                </div>
              )}
              {item.intro && <p className="ds-ex-txt-01">{item.intro}</p>}
              {item.description && (
                <p className="ds-ex-txt-02">
                  {item.description.split("\n\n").map((para, i, arr) => (
                    <span key={i}>
                      {para}
                      {i < arr.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              )}

              {item.sections.map((section, i) => (
                <div key={i} className="section-block">
                  {section.imageTop && (
                    <div className="v-t-section-top-img">
                      <img
                        src={section.imageTop}
                        alt={section.heading ?? ""}
                      />
                    </div>
                  )}
                  {section.heading && (
                    <p className="ds-ex-txt-03">{section.heading}</p>
                  )}
                  {section.imageBelow && (
                    <div className="v-t-section-top-img">
                      <img
                        src={section.imageBelow}
                        alt={section.heading ?? ""}
                      />
                    </div>
                  )}
                  {section.body && <p className="ds-ex-txt-04">{section.body}</p>}
                  {section.subsections?.map((sub, j) => (
                    <div key={j} className="sub-block">
                      <p className="ds-ex-txt-03-sub">{sub.heading}</p>
                      {sub.body && (
                        <p className="ds-ex-txt-04">{sub.body}</p>
                      )}
                    </div>
                  ))}
                  {section.image && (
                    <div className="v-t-main-sub-img">
                      <img src={section.image} alt={section.heading ?? ""} />
                    </div>
                  )}
                  {section.table && (
                    <div className="v-t-table-wrap">
                      <table className="v-t-table">
                        {section.table.headerRows && (
                          <thead>
                            {section.table.headerRows.map((row, r) => (
                              <tr key={r}>
                                {row.map((cell, c) => {
                                  const c2 =
                                    typeof cell === "string"
                                      ? { text: cell }
                                      : cell;
                                  return (
                                    <th
                                      key={c}
                                      colSpan={c2.colSpan}
                                      rowSpan={c2.rowSpan}
                                    >
                                      {c2.text}
                                    </th>
                                  );
                                })}
                              </tr>
                            ))}
                          </thead>
                        )}
                        <tbody>
                          {section.table.bodyRows.map((row, r) => (
                            <tr key={r}>
                              {row.map((cell, c) => {
                                const c2 =
                                  typeof cell === "string"
                                    ? { text: cell }
                                    : cell;
                                const Tag = c2.isHeader ? "th" : "td";
                                return (
                                  <Tag
                                    key={c}
                                    colSpan={c2.colSpan}
                                    rowSpan={c2.rowSpan}
                                  >
                                    {c2.text}
                                  </Tag>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.gallery && section.gallery.length > 0 && (
                    <div className="v-t-gallery">
                      {section.gallery.map((src, g) => (
                        <div key={g} className="v-t-gallery-item">
                          <img src={src} alt={`${section.heading ?? ""} ${g + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
