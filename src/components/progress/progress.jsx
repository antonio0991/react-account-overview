import './progress.css';

export const Progress = ({ percentage, lines }) => {
  const label = lines ? 'LINES SAVED' : 'UPLOAD SUCCESS';

  return (
    <div className="progress">
      <div className="Percentage">{percentage}%</div>
      {label}
    </div>
  );
};

export default Progress;
