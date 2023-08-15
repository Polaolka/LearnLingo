import sprite from "images/sprite.svg";

export const svgSprite = (id, className = "") => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export const scrollToTop = (top = 0) => {
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
