import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Progress from '../progress/progress';
import './sales.css';

export const Sales = ({ data }) => {
  const getUploadsuccessRate = () => {
    return (data.successfulUploads / data.uploads) * 100;
  };

  const getLinesSavedRate = () => {
    return (data.linesSaved / data.linesAttempted) * 100;
  };

  return (
    <div className="Sales">
      <div className="Upload">
        <div>
          <FontAwesomeIcon icon={faUpload} />
          <strong className="text-sale">Sales</strong>
        </div>
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
      <div className="Text">
        You had <strong>{data.uploads} uploads</strong> and{' '}
        <strong>{data.linesSaved}</strong> lines added
      </div>
      <div className="progressWrapper">
        <Progress percentage={getUploadsuccessRate()}></Progress>
        <Progress percentage={getLinesSavedRate()} lines></Progress>
      </div>
    </div>
  );
};

export default Sales;
