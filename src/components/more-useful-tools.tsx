const links = [
  { link: "https://favicon.io/favicon-converter/", name: "Favicon Converter" },
];

const MoreUsefulTools = () => {
  return (
    <div>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MoreUsefulTools;
