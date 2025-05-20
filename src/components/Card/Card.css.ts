import { style, keyframes, createVar, fallbackVar } from "@vanilla-extract/css";

const BORDER_RADIUS = "32px";
const TINT_COLOR = "rgba(255, 0, 0, 0.05)";

const angle = createVar({
  syntax: "<angle>",
  inherits: false,
  initialValue: "0deg",
});

const angleKeyframes = keyframes({
  to: { vars: { [angle]: "360deg" } },
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  gap: "8px",
  maxWidth: "600px",
  borderRadius: BORDER_RADIUS,
  background:
    `linear-gradient(${TINT_COLOR}, ${TINT_COLOR}) border-box, ` +
    `linear-gradient(${angle}, rgba(80, 80, 80, 0.4), rgba(136, 136, 136, 0.4)) border-box;`,
  backgroundBlendMode: "color",
  backdropFilter: "blur(50px)",
  boxShadow: "inset 0 0 8px rgba(255, 255, 255, 0.15)",
  textShadow: "0 0.5px 1px rgba(128, 128, 128, 0.5)",

  // Pseudo-element to add an inset border with a gradient effect
  "::before": {
    content: "",
    position: "absolute",
    inset: 0.5,
    borderRadius: BORDER_RADIUS,
    border: "1px solid transparent",
    background: `linear-gradient(${angle}, rgba(255, 255, 255, 0.15) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.3)) 100% border-box;`,
    animation: `${angleKeyframes} 20s infinite linear`,
    mask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
    // @ts-expect-error TS2353 - `mask-composite` property missing from type definition
    "mask-composite": "exclude",
  },

  vars: {
    // Fall back to 180deg if @property is not supported by the browser
    [angle]: fallbackVar(angle, "180deg"),
  },
});

export const cardContent = style({
  fontFamily: "sans-serif",
  color: "white",
});
