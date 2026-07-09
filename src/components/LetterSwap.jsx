function getDelay(index, total, staggerFrom, staggerDuration) {
  if (staggerFrom === 'last') {
    return (total - index - 1) * staggerDuration;
  }

  if (staggerFrom === 'center') {
    const center = (total - 1) / 2;
    return Math.abs(index - center) * staggerDuration;
  }

  return index * staggerDuration;
}

function LetterSwap({
  label,
  hoverLabel,
  reverse = false,
  staggerFrom = 'first',
  staggerDuration = 28,
  className = '',
  mode = 'forward',
}) {
  const baseLetters = Array.from(label);
  const swapLetters = Array.from(hoverLabel ?? label);
  const total = Math.max(baseLetters.length, swapLetters.length);
  const letters = Array.from({ length: total }, (_, index) => ({
    base: baseLetters[index] ?? '',
    swap: swapLetters[index] ?? '',
  }));

  return (
    <span
      className={`letter-swap letter-swap--${mode} ${reverse ? 'letter-swap--reverse' : ''} ${className}`}
      role="text"
      aria-label={label}
      style={{
        '--swap-enter': reverse ? '-108%' : '108%',
        '--swap-exit': reverse ? '108%' : '-108%',
      }}
    >
      {letters.map(({ base, swap }, index) => {
        const isSpace = base === ' ' || swap === ' ';

        return (
          <span
            aria-hidden="true"
            className={`letter-swap__char ${isSpace ? 'letter-swap__char--space' : ''}`}
            key={`${base}-${swap}-${index}`}
            style={{ '--letter-delay': `${getDelay(index, total, staggerFrom, staggerDuration)}ms` }}
          >
            <span className="letter-swap__glyph" data-swap={swap === ' ' ? '\u00A0' : swap}>
              {base === ' ' ? '\u00A0' : base}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function LetterSwapForward(props) {
  return <LetterSwap {...props} mode="forward" />;
}

export function LetterSwapPingPong(props) {
  return <LetterSwap {...props} mode="pingpong" />;
}
