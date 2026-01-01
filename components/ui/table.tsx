"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders an HTML table inside a horizontally scrollable container with consistent default styling.
 *
 * @param className - Additional CSS classes to merge into the table's class list
 * @param props - All other table attributes and event handlers forwarded to the underlying `<table>` element
 * @returns The rendered `<table>` element wrapped in a container that enables horizontal scrolling
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a table header element with standardized styling and a data-slot attribute.
 *
 * @returns A `thead` element whose rows receive a bottom border style, includes `data-slot="table-header"`, and forwards any provided props.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled table body element.
 *
 * Forwards all received props to the underlying `tbody`, applies predefined styling that removes the border from the last row, and sets `data-slot="table-body"` for slot-based styling.
 *
 * @returns The rendered `tbody` element with applied styling and `data-slot="table-body"`.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Renders a table footer element with a muted background, top border, and medium font weight, forwards all props to the underlying `<tfoot>`, and sets `data-slot="table-footer"`.
 *
 * @returns The rendered `<tfoot>` element.
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a table row element with standardized styling and a data-slot attribute.
 *
 * Applies hover, selection, border-bottom, and color transition styles, merges any
 * provided `className`, and forwards remaining props to the underlying `tr`.
 *
 * @returns A `tr` element with `data-slot="table-row"` and the composed className
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table header cell (`th`) with a data-slot attribute for slot-based styling.
 *
 * Merges the provided `className` with the component's default header styles and forwards all other props to the underlying `th` element.
 *
 * @param className - Additional class names to merge with the default header styles
 * @returns The rendered `<th>` element with applied styles and forwarded props
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table cell (<td>) with default padding, alignment, and whitespace handling, including adjustments when a nested checkbox is present.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns A `<td>` element with `data-slot="table-cell"`, the composed `className`, and all forwarded props
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table caption element prestyled for use with the table components.
 *
 * @returns The rendered `caption` element with muted foreground color, top margin, and small text size; any `className` passed in is merged with the default styles. 
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}