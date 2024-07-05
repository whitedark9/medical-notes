import { Bleed } from "nextra-theme-docs";
import { ReactNode } from "react";

interface ImageProps {
  src: string;
  alt: string;
  src2?: string;
  alt2?: string;
  className?: string;
  label?: ReactNode;
}

export default function Image(props: ImageProps) {
  return (
    <Bleed full={false}>
      <span className="bg-primary-container block">
        <span className="align-center flex flex-row justify-center">
          <span className="flex grow">
            <img src={props.src} alt={props.alt} className="grow" />
          </span>
          {props.src2 && props.alt2 && (
            <span className="flex grow">
              <img src={props.src2} alt={props.alt2} className="grow" />
            </span>
          )}
        </span>
        <span className="mb-5 block p-2 text-center text-base italic">
          {props.label}
        </span>
      </span>
    </Bleed>
  );
}
