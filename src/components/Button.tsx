import type { ReactNode } from "react";

export interface ButtonProps {
  url?: string;
  text: string;
  iconSVG: ReactNode;
  onClick?: () => void;
}

export function Button({ url, text, iconSVG, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <li
      className="d-inline-flex"
      title={text}
      style={{
        border: "1px solid #d1d9e0",
        borderRadius: "6px",
        marginLeft: "10px",
      }}
      onClick={handleClick}
    >
      <a
        href={url}
        target="_blank"
        title={text}
        className="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
      >
        {iconSVG}
        <span data-content={text}>{text}</span>
      </a>
    </li>
  );
}
