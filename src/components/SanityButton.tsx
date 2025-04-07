import React from "react";
import { Button, buttonVariants } from "@components/ui/button";

type VariantProps = React.ComponentProps<typeof Button>["variant"];
type SizeProps = React.ComponentProps<typeof Button>["size"];

export interface SanityButtonProps {
  buttonData: {
    _key?: string;
    enableButton: boolean;
    linkType: "internal" | "external" | "download";
    linkText: string;
    internalLink?: string | null;
    externalUrl?: string | null;
    variant?: VariantProps;
    downloadFile?: {
      file: {
        asset: {
          url: string;
        };
      };
    } | null;
  };
  size?: SizeProps;
  className?: string;
}

export function SanityButton({
  buttonData,
  size,
  className,
}: SanityButtonProps) {
  if (!buttonData.enableButton) return null;

  const {
    _key,
    linkType,
    linkText,
    internalLink,
    externalUrl,
    variant = "default",
    downloadFile,
  } = buttonData;

  const href =
    linkType === "internal"
      ? internalLink ?? undefined
      : linkType === "external"
      ? externalUrl ?? undefined
      : linkType === "download"
      ? downloadFile?.file?.asset?.url
      : undefined;

  const isExternal = linkType === "external";
  const isDownload = linkType === "download";

  if (!href) {
    return (
      <Button variant={variant} size={size} className={className} disabled>
        {linkText}
      </Button>
    );
  }

  const classNames = buttonVariants({ variant, size, className });

  return (
    <a
      key={_key}
      href={href}
      className={classNames}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={isDownload}
    >
      {linkText}
    </a>
  );
}
