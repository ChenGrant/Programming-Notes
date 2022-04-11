const RenderFiles = ({ files }) => {
  if (files.length === 0) return null;

  const fileList = files.map(({ name, id, url }) => (
    <li key={id}>
      <a href={url} target = "_blank" rel = "noreferrer">
        {name}
      </a>
    </li>
  ));

  return <ul>{fileList}</ul>;
};

export default RenderFiles;
