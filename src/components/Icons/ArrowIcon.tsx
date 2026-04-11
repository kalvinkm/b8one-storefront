type ArrowProps = {
  direction: 'left' | 'right';
};

export function ArrowIcon({ direction }: ArrowProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
