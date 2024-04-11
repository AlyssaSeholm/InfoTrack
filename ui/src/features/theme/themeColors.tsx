
const THEMES: { [themeName: string]: Partial<ThemeColors> } = Object.freeze({
    "aqua": {
      colorScheme: "dark",
      primary: "#09ecf3",
      primaryContent: "#005355",
      secondary: "#966fb3",
      accent: "#ffe999",
      neutral: "#3b8ac4",
      base100: "#345da7",
      info: "#2563eb",
      success: "#16a34a",
      warning: "#d97706",
      error: "oklch(73.95% 0.19 27.33)",
    },
    "black": {
      colorScheme: "dark",
      primary: "#373737",
      secondary: "#373737",
      accent: "#373737",
      base100: "#000000",
      base200: "#141414",
      base300: "#262626",
      baseContent: "#d6d6d6",
      neutral: "#373737",
      info: "#0000ff",
      success: "#008000",
      warning: "#ffff00",
      error: "#ff0000",
      "--rounded-box": "0",
      "--rounded-btn": "0",
      "--rounded-badge": "0",
      "--animation-btn": "0",
      "--animation-input": "0",
      "--btn-focus-scale": "1",
      "--tab-radius": "0",
    },
    "bumblebee": {
      colorScheme: "light",
      primary: "oklch(89.51% 0.2132 96.61)",
      primaryContent: "oklch(38.92% 0.046 96.61)",
      secondary: "oklch(80.39% 0.194 70.76)",
      secondaryContent: "oklch(39.38% 0.068 70.76)",
      accent: "oklch(81.27% 0.157 56.52)",
      neutral: "oklch(12.75% 0.075 281.99)",
      base100: "oklch(100% 0 0)",
    },
    "cmyk": {
      colorScheme: "light",
      primary: "#45AEEE",
      secondary: "#E8488A",
      accent: "#FFF232",
      neutral: "#1a1a1a",
      base100: "oklch(100% 0 0)",
      info: "#4AA8C0",
      success: "#823290",
      warning: "#EE8133",
      error: "#E93F33",
    },
    "corporate": {
      colorScheme: "light",
      primary: "oklch(60.39% 0.228 269.1)",
      secondary: "#7b92b2",
      accent: "#67cba0",
      neutral: "#181a2a",
      neutralContent: "#edf2f7",
      base100: "oklch(100% 0 0)",
      baseContent: "#181a2a",
      "--rounded-box": "0.25rem",
      "--rounded-btn": ".125rem",
      "--rounded-badge": ".125rem",
      "--tab-radius": "0.25rem",
      "--animation-btn": "0",
      "--animation-input": "0",
      "--btn-focus-scale": "1",
    },
    "cupcake": {
      colorScheme: "light",
      primary: "#65c3c8",
      secondary: "#ef9fbc",
      accent: "#eeaf3a",
      neutral: "#291334",
      base100: "#faf7f5",
      base200: "#efeae6",
      base300: "#e7e2df",
      baseContent: "#291334",
      "--rounded-btn": "1.9rem",
      "--tab-border": "2px",
      "--tab-radius": "0.7rem",
    },
    "cyberpunk": {
      colorScheme: "light",
      fontFamily:
        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
      primary: "oklch(74.22% 0.209 6.35)",
      secondary: "oklch(83.33% 0.184 204.72)",
      accent: "oklch(71.86% 0.2176 310.43)",
      neutral: "oklch(23.04% 0.065 269.31)",
      neutralContent: "oklch(94.51% 0.179 104.32)",
      base100: "oklch(94.51% 0.179 104.32)",
      "--rounded-box": "0",
      "--rounded-btn": "0",
      "--rounded-badge": "0",
      "--tab-radius": "0",
    },
    "dark": {
      colorScheme: "dark",
      primary: "oklch(65.69% 0.196 275.75)",
      secondary: "oklch(74.8% 0.26 342.55)",
      accent: "oklch(74.51% 0.167 183.61)",
      neutral: "#2a323c",
      neutralContent: "#A6ADBB",
      base100: "#1d232a",
      base200: "#191e24",
      base300: "#15191e",
      baseContent: "#A6ADBB",
    },
    "dracula": {
      colorScheme: "dark",
      primary: "#ff79c6",
      secondary: "#bd93f9",
      accent: "#ffb86c",
      neutral: "#414558",
      base100: "#282a36",
      baseContent: "#f8f8f2",
      info: "#8be9fd",
      success: "#50fa7b",
      warning: "#f1fa8c",
      error: "#ff5555",
    },
    "emerald": {
      colorScheme: "light",
      primary: "#66cc8a",
      primaryContent: "#223D30",
      secondary: "#377cfb",
      secondaryContent: "#fff",
      accent: "#f68067",
      accentContent: "#000",
      neutral: "#333c4d",
      neutralContent: "#f9fafb",
      base100: "oklch(100% 0 0)",
      baseContent: "#333c4d",
      "--animation-btn": "0",
      "--animation-input": "0",
      "--btn-focus-scale": "1",
    },
    "fantasy": {
      colorScheme: "light",
      primary: "oklch(37.45% 0.189 325.02)",
      secondary: "oklch(53.92% 0.162 241.36)",
      accent: "oklch(75.98% 0.204 56.72)",
      neutral: "#1f2937",
      base100: "oklch(100% 0 0)",
      baseContent: "#1f2937",
    },
    "forest": {
      colorScheme: "dark",
      primary: "#1eb854",
      primaryContent: "#000000",
      secondary: "#1DB88E",
      accent: "#1DB8AB",
      neutral: "#19362D",
      base100: "#171212",
      "--rounded-btn": "1.9rem",
    },
    "garden": {
      colorScheme: "light",
      primary: "oklch(62.45% 0.278 3.8363600743192197)",
      primaryContent: "#fff",
      secondary: "#8E4162",
      accent: "#5c7f67",
      neutral: "#291E00",
      neutralContent: "#e9e7e7",
      base100: "#e9e7e7",
      baseContent: "#100f0f",
    },
    "halloween": {
      colorScheme: "dark",
      primary: "oklch(77.48% 0.204 60.62)",
      primaryContent: "#131616",
      secondary: "oklch(45.98% 0.248 305.03)",
      accent: "oklch(64.8% 0.223 136.07347934356451)",
      accentContent: "#000000",
      neutral: "#2F1B05",
      base100: "#212121",
      info: "#2563eb",
      success: "#16a34a",
      warning: "#d97706",
      error: "oklch(65.72% 0.199 27.33)",
    },
    "light": {
      colorScheme: "light",
      primary: "oklch(49.12% 0.3096 275.75)",
      secondary: "oklch(69.71% 0.329 342.55)",
      secondaryContent: "oklch(98.71% 0.0106 342.55)",
      accent: "oklch(76.76% 0.184 183.61)",
      neutral: "#2B3440",
      neutralContent: "#D7DDE4",
      base100: "oklch(100% 0 0)",
      base200: "#F2F2F2",
      base300: "#E5E6E6",
      baseContent: "#1f2937",
    },
    "lofi": {
      colorScheme: "light",
      primary: "#0D0D0D",
      primaryContent: "oklch(100% 0 0)",
      secondary: "#1A1919",
      secondaryContent: "oklch(100% 0 0)",
      accent: "#262626",
      accentContent: "oklch(100% 0 0)",
      neutral: "#000000",
      neutralContent: "oklch(100% 0 0)",
      base100: "oklch(100% 0 0)",
      base200: "#F2F2F2",
      base300: "#E6E5E5",
      baseContent: "#000000",
      info: "oklch(79.54% 0.103 205.9)",
      success: "oklch(90.13% 0.153 164.14)",
      warning: "oklch(88.37% 0.135 79.94)",
      error: "oklch(78.66% 0.15 28.47)",
      "--rounded-box": "0.25rem",
      "--rounded-btn": "0.125rem",
      "--rounded-badge": "0.125rem",
      "--tab-radius": "0.125rem",
      "--animation-btn": "0",
      "--animation-input": "0",
      "--btn-focus-scale": "1",
    },
    "luxury": {
      colorScheme: "dark",
      primary: "oklch(100% 0 0)",
      secondary: "#152747",
      accent: "#513448",
      neutral: "#331800",
      neutralContent: "#FFE7A3",
      base100: "#09090b",
      base200: "#171618",
      base300: "#2e2d2f",
      baseContent: "#dca54c",
      info: "#66c6ff",
      success: "#87d039",
      warning: "#e2d562",
      error: "#ff6f6f",
    },
    "pastel": {
      colorScheme: "light",
      primary: "#d1c1d7",
      secondary: "#f6cbd1",
      accent: "#b4e9d6",
      neutral: "#70acc7",
      base100: "oklch(100% 0 0)",
      base200: "#f9fafb",
      base300: "#d1d5db",
      "--rounded-btn": "1.9rem",
      "--tab-radius": "0.7rem",
    },
    "retro": {
      colorScheme: "light",
      primary: "#ef9995",
      primaryContent: "#282425",
      secondary: "#a4cbb4",
      secondaryContent: "#282425",
      accent: "#DC8850",
      accentContent: "#282425",
      neutral: "#2E282A",
      neutralContent: "#EDE6D4",
      base100: "#ece3ca",
      base200: "#e4d8b4",
      base300: "#DBCA9A",
      baseContent: "#282425",
      info: "#2563eb",
      success: "#16a34a",
      warning: "#d97706",
      error: "oklch(65.72% 0.199 27.33)",
      "--rounded-box": "0.4rem",
      "--rounded-btn": "0.4rem",
      "--rounded-badge": "0.4rem",
      "--tab-radius": "0.4rem",
    },
    "synthwave": {
      colorScheme: "dark",
      primary: "#e779c1",
      secondary: "#58c7f3",
      accent: "oklch(88.04% 0.206 93.72)",
      neutral: "#221551",
      neutralContent: "#f9f7fd",
      base100: "#1a103d",
      baseContent: "#f9f7fd",
      info: "#53c0f3",
      infoContent: "#201047",
      success: "#71ead2",
      "successContent": "#201047",
      warning: "#eace6c",
      "warningContent": "#201047",
      error: "#ec8c78",
      "errorContent": "#201047",
    },
    "valentine": {
      colorScheme: "light",
      primary: "#e96d7b",
      secondary: "#a991f7",
      accent: "#66b1b3",
      neutral: "#af4670",
      neutralContent: "#f0d6e8",
      base100: "#fae7f4",
      baseContent: "#632c3b",
      info: "#2563eb",
      success: "#16a34a",
      warning: "#d97706",
      error: "oklch(73.07% 0.207 27.33)",
      "--rounded-btn": "1.9rem",
      "--tab-radius": "0.7rem",
    },
    "wireframe": {
      colorScheme: "light",
      fontFamily: "Chalkboard,comic sans ms,'sans-serif'",
      primary: "#b8b8b8",
      secondary: "#b8b8b8",
      accent: "#b8b8b8",
      neutral: "#ebebeb",
      base100: "oklch(100% 0 0)",
      base200: "#eeeeee",
      base300: "#dddddd",
      info: "#0000ff",
      success: "#008000",
      warning: "#a6a659",
      error: "#ff0000",
      "--rounded-box": "0.2rem",
      "--rounded-btn": "0.2rem",
      "--rounded-badge": "0.2rem",
      "--tab-radius": "0.2rem",
    },
    "autumn": {
      colorScheme: "light",
      primary: "#8C0327",
      secondary: "#D85251",
      accent: "#D59B6A",
      neutral: "#826A5C",
      base100: "#f1f1f1",
      info: "#42ADBB",
      success: "#499380",
      warning: "#E97F14",
      error: "oklch(53.07% 0.241 24.16)",
    },
    "business": {
      colorScheme: "dark",
      primary: "#1C4E80",
      secondary: "#7C909A",
      accent: "#EA6947",
      neutral: "#23282E",
      base100: "#202020",
      info: "#0091D5",
      success: "#6BB187",
      warning: "#DBAE59",
      error: "#AC3E31",
      "--rounded-box": "0.25rem",
      "--rounded-btn": ".125rem",
      "--rounded-badge": ".125rem",
    },
    "acid": {
      colorScheme: "light",
      primary: "oklch(71.9% 0.357 330.7595734057481)",
      secondary: "oklch(73.37% 0.224 48.25087840015526)",
      accent: "oklch(92.78% 0.264 122.96295065960891)",
      neutral: "oklch(21.31% 0.128 278.68)",
      base100: "#fafafa",
      info: "oklch(60.72% 0.227 252.05)",
      success: "oklch(85.72% 0.266 158.53)",
      warning: "oklch(91.01% 0.212 100.5)",
      error: "oklch(64.84% 0.293 29.34918758658804)",
      "--rounded-box": "1.25rem",
      "--rounded-btn": "1rem",
      "--rounded-badge": "1rem",
      "--tab-radius": "0.7rem",
    },
    "lemonade": {
      colorScheme: "light",
      primary: "oklch(58.92% 0.199 134.6)",
      secondary: "oklch(77.75% 0.196 111.09)",
      accent: "oklch(85.39% 0.201 100.73)",
      neutral: "oklch(30.98% 0.075 108.6)",
      base100: "oklch(98.71% 0.02 123.72)",
      info: "oklch(86.19% 0.047 224.14)",
      success: "oklch(86.19% 0.047 157.85)",
      warning: "oklch(86.19% 0.047 102.15)",
      error: "oklch(86.19% 0.047 25.85)",
    },
    "night": {
      colorScheme: "dark",
      primary: "#38bdf8",
      secondary: "#818CF8",
      accent: "#F471B5",
      neutral: "#1E293B",
      base100: "#0F172A",
      info: "#0CA5E9",
      infoContent: "#000000",
      success: "#2DD4BF",
      warning: "#F4BF50",
      error: "#FB7085",
    },
    "coffee": {
      colorScheme: "dark",
      primary: "#DB924B",
      secondary: "#263E3F",
      accent: "#10576D",
      neutral: "#120C12",
      base100: "#20161F",
      baseContent: "#c59f60",
      info: "#8DCAC1",
      success: "#9DB787",
      warning: "#FFD25F",
      error: "#FC9581",
    },
    "winter": {
      colorScheme: "light",
      primary: "oklch(56.86% 0.255 257.57)",
      secondary: "#463AA2",
      accent: "#C148AC",
      neutral: "#021431",
      base100: "oklch(100% 0 0)",
      base200: "#F2F7FF",
      base300: "#E3E9F4",
      baseContent: "#394E6A",
      info: "#93E7FB",
      success: "#81CFD1",
      warning: "#EFD7BB",
      error: "#E58B8B",
    },
    "dim": {
      colorScheme: "dark",
      primary: "#9FE88D",
      secondary: "#FF7D5C",
      accent: "#C792E9",
      neutral: "#1c212b",
      neutralContent: "#B2CCD6",
      base100: "#2A303C",
      base200: "#242933",
      base300: "#20252E",
      baseContent: "#B2CCD6",
      info: "#28ebff",
      success: "#62efbd",
      warning: "#efd057",
      error: "#ffae9b",
    },
    "nord": {
      colorScheme: "light",
      primary: "#5E81AC",
      secondary: "#81A1C1",
      accent: "#88C0D0",
      neutral: "#4C566A",
      neutralContent: "#D8DEE9",
      base100: "#ECEFF4",
      base200: "#E5E9F0",
      base300: "#D8DEE9",
      baseContent: "#2E3440",
      info: "#B48EAD",
      success: "#A3BE8C",
      warning: "#EBCB8B",
      error: "#BF616A",
      "--rounded-box": "0.4rem",
      "--rounded-btn": "0.2rem",
      "--rounded-badge": "0.4rem",
      "--tab-radius": "0.2rem",
    },
    "sunset": {
      colorScheme: "dark",
      primary: "#FF865B",
      secondary: "#FD6F9C",
      accent: "#B387FA",
      neutral: "oklch(26% 0.019 237.69)",
      neutralContent: "oklch(70% 0.019 237.69)",
      base100: "oklch(22% 0.019 237.69)",
      base200: "oklch(20% 0.019 237.69)",
      base300: "oklch(18% 0.019 237.69)",
      baseContent: "#9fb9d0",
      info: "#89e0eb",
      success: "#addfad",
      warning: "#f1c891",
      error: "#ffbbbd",
      "--rounded-box": "1.2rem",
      "--rounded-btn": "0.8rem",
      "--rounded-badge": "0.4rem",
      "--tab-radius": "0.7rem",
    },
  });

  interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    base100: string;
    info: string;
    success: string;
    warning: string;
    error: string;

    // Optional properties
    colorScheme?: string;
    base200?: string;
    base300?: string;
    baseContent?: string;
    primaryContent?: string; 
    secondaryContent?: string;
    accentContent?: string;
    neutralContent?: string;
    infoContent?: string;
    successContent?: string;
    warningContent?: string;
    errorContent?: string;
    fontFamily?: string;
    "--rounded-box"?: string;
    "--rounded-btn"?: string;
    "--rounded-badge"?: string;
    "--tab-radius"?: string;
    "--animation-btn"?: string;
    "--animation-input"?: string;
    "--btn-focus-scale"?: string;
    "--tab-border"?: string;
  }

  // Utility function to fill missing properties with an empty string
function completeThemes(themes: { [themeName: string]: Partial<ThemeColors> }): { [themeName: string]: ThemeColors } {
    const fullThemes: { [themeName: string]: ThemeColors } = {};
  
    Object.keys(themes).forEach(themeName => {
      const theme = themes[themeName];
      const completedTheme: ThemeColors = {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
        base100: "",
        info: "",
        success: "",
        warning: "",
        error: "",
        // Set all other properties to empty strings by default
        // Then override with existing properties from the theme
        ...theme,
        colorScheme: theme.colorScheme || "",
        base200: theme.base200 || "",
        base300: theme.base300 || "",
        baseContent: theme.baseContent || "",
        primaryContent: theme.primaryContent || "",
        secondaryContent: theme.secondaryContent || "",
        accentContent: theme.accentContent || "",
        neutralContent: theme.neutralContent || "",
        infoContent: theme.infoContent || "",
        successContent: theme.successContent || "",
        warningContent: theme.warningContent || "",
        errorContent: theme.errorContent || "",
        fontFamily: theme.fontFamily || "",
        "--rounded-box": theme["--rounded-box"] || "",
        "--rounded-btn": theme["--rounded-btn"] || "",
        "--rounded-badge": theme["--rounded-badge"] || "",
        "--tab-radius": theme["--tab-radius"] || "",
        "--animation-btn": theme["--animation-btn"] || "",
        "--animation-input": theme["--animation-input"] || "",
        "--btn-focus-scale": theme["--btn-focus-scale"] || "",
        "--tab-border": theme["--tab-border"] || "",
      };
      fullThemes[themeName] = completedTheme;
    });
  
    return fullThemes;
  }
  
  // Now, use the utility function to complete your themes
  const CompletedThemes = completeThemes(THEMES);

  export default CompletedThemes;
  