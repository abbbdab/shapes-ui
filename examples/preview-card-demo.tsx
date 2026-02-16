import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "@/components/ui/preview-card";

export default function PreviewCardDemo() {
  return (
    <PreviewCard>
      <p className={' text-sm'}>
        Apple's{" "}
        <PreviewCardTrigger
          target={"_blank"}
          href={"https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass"}
        >
          Liquid Glass
        </PreviewCardTrigger>{" "}
        has been a controversial release.
      </p>
      <PreviewCardPopup className={"flex w-fit flex-col gap-2 items-center justify-center p-3"}>
        <img
          alt={"Liquid Glass UI"}
          className={"w-72 rounded-lg bg-muted object-cover p-2"}
          src={
            "https://docs-assets.developer.apple.com/published/2299e5e8eafedded6947927a8f704c34/landing-page-intoducing-liquid-glass-hero~dark%402x.png"
          }
        />
        <p className={"text-xs"}>Liquid glass affects SwiftUI, UIKit, and AppKit.</p>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
