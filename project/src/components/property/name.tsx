export function PropertyName({name}: {name: string}) {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {name}
      </h1>
    </div>
  );
}
