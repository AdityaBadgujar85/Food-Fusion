import React from "react";

const CartIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
  badgeCount = 0,
  ariaLabel = "shopping cart",
}) => {
  const showBadge = Number(badgeCount) > 0;
  return (
    <span style={{ position: "relative", display: "inline-block", lineHeight: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        role="img"
        aria-label={ariaLabel}
      >
        <title>{ariaLabel}</title>
        <path d="M6 6h15l-1.5 9h-11L6 6z" />
        <path d="M3 6h3" />
        <circle cx="9" cy="20" r="1.5" fill={color} stroke="none" />
        <circle cx="18" cy="20" r="1.5" fill={color} stroke="none" />
      </svg>

      {showBadge && (
        <span
          aria-hidden={false}
          style={{
            position: "absolute",
            top: -6,
            right: -6,
            minWidth: 18,
            height: 18,
            padding: "0 5px",
            borderRadius: 9,
            fontSize: 11,
            lineHeight: "18px",
            textAlign: "center",
            background: "#ef4444",
            color: "white",
            fontWeight: 600,
            boxSizing: "border-box",
          }}
        >
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}
    </span>
  );
};

export default CartIcon;
