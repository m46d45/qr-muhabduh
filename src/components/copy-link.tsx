import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://muhabduh.id";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE_URL);
    } catch {
      const field = document.createElement("textarea");
      field.value = SITE_URL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={copy} className="flex-1">
      <span className="relative inline-flex size-4 items-center justify-center">
        <Copy
          className={
            copied
              ? "absolute scale-[0.25] opacity-0 blur-[4px] transition-[opacity,transform,filter] duration-fast ease-in-out"
              : "absolute scale-100 opacity-100 blur-none transition-[opacity,transform,filter] duration-fast ease-in-out"
          }
          aria-hidden="true"
        />
        <Check
          className={
            copied
              ? "absolute scale-100 opacity-100 blur-none transition-[opacity,transform,filter] duration-fast ease-in-out"
              : "absolute scale-[0.25] opacity-0 blur-[4px] transition-[opacity,transform,filter] duration-fast ease-in-out"
          }
          aria-hidden="true"
        />
      </span>
      {copied ? "Tersalin" : "Salin tautan"}
    </Button>
  );
}
