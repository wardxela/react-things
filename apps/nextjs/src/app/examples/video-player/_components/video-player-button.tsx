import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@react-things/ui";

export interface VideoPlayerButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  isPlaying: boolean;
}

/**
 * Usually I try to break my components into smaller ones and separate them on different files.
 * But of course it depends on the context. If your component is small enough - just leave it in the same place.
 *
 * This is an example of the small reusable component.
 * Things to note:
 * - Props are extended from `<button>` props. It allows parent components to pass any attribute supported by the `<button>`
 * - `classNames` are concatenated using `twMerge` (In our case, `cn` uses it under the hood). It allows us customize and override component styles.
 * - In most cases I prefer to omit `children` in such components (It already have its own `children`), but technically it can be useful.
 */
export function VideoPlayerButton({
  children,
  className,
  isPlaying,
  ...props
}: VideoPlayerButtonProps) {
  return (
    <button
      className={cn(
        "absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gray-800 p-3",
        className,
      )}
      {...props}
    >
      {isPlaying ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
}
