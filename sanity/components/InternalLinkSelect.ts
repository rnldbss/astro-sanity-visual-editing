// Workaround for the issue of fetching the
// list of pages in the sanity studio
// https://www.sanity.io/schemas/asynchronous-list-options-component-05f63a29

import { useState, useEffect } from "react";
import { useClient } from "sanity";
import type { StringInputProps } from "sanity";

interface Page {
  title: string;
  slug?: string;
}

interface ListOption {
  title: string;
  value: string;
}

const InternalLinkSelect = (props: StringInputProps) => {
  const [listItems, setListItems] = useState<ListOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { schemaType, renderDefault, value } = props;
  const client = useClient();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const query = `*[_type match "page*"] {
          title,
          "slug": slug.current
        }`;

        const pages = await client.fetch<Page[]>(query);
        const options: ListOption[] = pages.map((page) => ({
          title: page.title,
          value: `/${page.slug || ""}`,
        }));

        setListItems(options);
      } catch (error) {
        console.error("Error fetching pages:", error);
        setListItems([{ title: "Home", value: "/" }]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPages();
  }, [client]);

  if (isLoading) {
    return;
  }

  // Ensure the current value exists in the options
  const isValidValue = listItems.some((option) => option.value === value);
  const currentValue = isValidValue ? value : undefined;

  return renderDefault({
    ...props,
    value: currentValue,
    schemaType: {
      ...schemaType,
      options: {
        ...schemaType.options,
        list: listItems,
      },
    },
  });
};

export default InternalLinkSelect;
