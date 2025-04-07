import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import type { PortableTextBlock } from "types/global";
import MyPortableText from "@components/MyPortableText";

interface AccordionItemData {
  string: string;
  contentBlock: PortableTextBlock[];
}

interface MyAccordionProps {
  accordionData: AccordionItemData[];
}

export default function MyAccordion({ accordionData }: MyAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.string}</AccordionTrigger>
          <AccordionContent>
            <MyPortableText content={item.contentBlock} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
