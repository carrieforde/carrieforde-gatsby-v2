import { TimestampFormat } from "@/components/timestamp/types";

export function getIsoDate(date: Date | string): string {
  return new Date(date).toISOString();
}

export function getFormattedDate(
  date: Date | string,
  format: TimestampFormat = "full",
): string {
  return new Date(date).toLocaleDateString("en-US", { dateStyle: format });
}
