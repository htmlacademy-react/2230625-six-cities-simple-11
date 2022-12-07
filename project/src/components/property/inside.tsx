export function PropertyInside({inside}: {inside: string[]}) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          inside.map((item) =>
            (
              <li key={item} className="property__inside-item">
                {item}
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}
