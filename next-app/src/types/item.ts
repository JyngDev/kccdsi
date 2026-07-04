export type ItemSubSection = {
  heading: string;
  body?: string;
};

export type TableCell =
  | string
  | { text: string; colSpan?: number; rowSpan?: number; isHeader?: boolean };

export type ItemTable = {
  headerRows?: TableCell[][];
  bodyRows: TableCell[][];
};

export type ItemSection = {
  /** sub-heading (red text on original site) */
  heading?: string;
  /** body paragraph */
  body?: string;
  /** optional image rendered ABOVE the section heading */
  imageTop?: string;
  /** optional image rendered directly BELOW the section heading */
  imageBelow?: string;
  /** optional table-style image */
  image?: string;
  /** optional nested sub-headings under this section */
  subsections?: ItemSubSection[];
  /** optional structured table */
  table?: ItemTable;
  /** optional gallery — multiple images in a grid */
  gallery?: string[];
};

export type ItemCategory = {
  /** slug for the parent product (e.g. "ds-m-01") */
  slug: string;
  label: string;
  children: { slug: string; label: string }[];
};

export type Item = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  mainImage?: string;
  intro?: string;
  description?: string;
  sections: ItemSection[];
};
