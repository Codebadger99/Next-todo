"use client";
import { useEffect } from "react";
import { useStore } from "./store";
import localFont from "next/font/local";

const font = localFont({
  src: "./../public/JosefinSans-VariableFont_wght.ttf",
  display: "swap",
});

const Theme: React.FC = () => {
  const { theme } = useStore();

  useEffect(() => {
    const bodyClass = theme ? "bg-VeryDarkDesaturatedBlue" : "bg-VeryLightGray";
    document.body.className = `${font.className} ${bodyClass}`;
  }, [theme]);

  return null;
};

export default Theme;
