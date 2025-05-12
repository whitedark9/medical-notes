import clsx from "clsx";
import { ArrowRightIcon } from "nextra/icons";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { SectionProps } from "~/constants/types";

type Group = { heading: ReactNode; rest: ReactNode[] };

export default function Section({ children, show = false }: SectionProps) {
  const [collapse, setCollapse] = useState<boolean>(!show);

  const groupedChildren = useMemo((): Group => {
    const group: Group = { heading: null, rest: [] };

    Children.map(children, (child) => {
      if (isValidElement(child)) {
        //@ts-ignore
        if (child.type?.name === "Heading" && group.heading === null) {
          group.heading = child;
        } else {
          group.rest.push(child);
        }
      }
    });

    return group;
  }, [children]);

  const toggleCollapse = useCallback(() => setCollapse((prev) => !prev), []);

  return (
    <div>
      {!!isValidElement(groupedChildren.heading) &&
        cloneElement(groupedChildren.heading, {
          //@ts-ignore
          onClick: toggleCollapse,
          className: "flex flex-row cursor-pointer items-center gap-4",
          children: (
            <>
              <span>
                <ArrowRightIcon
                  className={clsx("h-9 w-9", collapse ? "rotate-[90deg]" : "")}
                />
              </span>
              {groupedChildren.heading.props.children}
            </>
          ),
        })}
      {!collapse && <div>{groupedChildren.rest}</div>}
    </div>
  );
}
