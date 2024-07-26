import "./Subtitle.css";

function Subtitle({ children }) {
  return (
    <div className="subtitle-container">
      <span></span>
      <p>{children}</p>
    </div>
  );
}

export default Subtitle;
