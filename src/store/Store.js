import { readable, writable } from "svelte/store";

export const cardNumber = writable("################");
export const cardHolder = writable("full name");
export const ccv = writable("####");
export const selectedMonth = writable("mm");
export const selectedYear = writable("yy");
export const submitInfo = writable([]);
export const month = readable([
  { month: "01" },
  { month: "02" },
  { month: "03" },
  { month: "04" },
  { month: "05" },
  { month: "06" },
  { month: "07" },
  { month: "08" },
  { month: "09" },
  { month: "10" },
  { month: "11" },
  { month: "12" }
]);
export const year = readable([
  { year: "2021" },
  { year: "2022" },
  { year: "2023" },
  { year: "2024" },
  { year: "2025" },
  { year: "2026" },
  { year: "2027" },
  { year: "2028" },
  { year: "2029" },
  { year: "2030" },
  { year: "2031" },
  { year: "2032" }
]);
