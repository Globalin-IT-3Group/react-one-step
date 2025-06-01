function Stack() {
  const imagePaths = [
    "/public/HTML5_Badge.svg.png",
    "/public/java-coffee-cup-logo.png",
    "/public/Spring-logo.png",
    "/public/JavaScript_logo.png",
    "/public/oracle.png",
    "/public/React-icon.png",
    "/public/vite.svg",
    "/public/HTML5_Badge.svg.png",
  ];

  return (
    <div className="grid grid-cols-4 ga-6 place-items-center gap-y-18">
      {imagePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`stack-${index}`}
          className="w-24 h-24 object-contain"
        />
      ))}
    </div>
  );
}

export default Stack;
