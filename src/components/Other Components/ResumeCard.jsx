import "./ResumeCard.css";

const ResumeCard = ({ prop }) => {
  return prop.map(({ title, duration, discription }) => {
    return (
      <div className="resume-experince-education">
        <div className="resume-details-list">
          <span className="resume-circle"></span>
          <h3 className="resume-title">{title}</h3>
          <small>{duration}</small>
          <p>{discription}</p>
        </div>
      </div>
    );
  });
};

export default ResumeCard;
