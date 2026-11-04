export function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "right" }) {
  return <svg className="ui-arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {direction === "right" ? <path d="M4 12h16m-7-7 7 7-7 7"/> : <path d="M5 19 19 5M8 5h11v11"/>}
  </svg>;
}
