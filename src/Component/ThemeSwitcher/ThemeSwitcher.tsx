import { useEffect } from "react";
import { RootState } from "../../redux/app/store";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { setTheme } from "../../redux/features/Themes/themeSlice";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme);

  useEffect(() => {
    console.log("Current theme:", theme); // Log the current theme

    const body = window.document.body;

    if (theme === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else if (theme === "light") {
      body.classList.add("light");
      body.classList.remove("dark");
    } else {
      // Handle system preference
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      body.classList.add(systemPreference);
      body.classList.remove(systemPreference === "dark" ? "light" : "dark");
    }
  }, [theme]);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    console.log("Changing theme to:", newTheme); // Log theme change
    dispatch(setTheme(newTheme));
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleThemeChange("light")}
        className="p-2 bg-gray-200"
      >
        Light
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className="p-2 bg-gray-600"
      >
        Dark
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className="p-2 bg-gray-400"
      >
        System
      </button>
    </div>
  );
};

export default ThemeSwitcher;
