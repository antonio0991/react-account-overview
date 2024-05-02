import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({ data }) => {
  return (
    <div className="Header">
      <div className="HeaderText">
        <h1>Account Overview</h1>
      </div>
      <div className="HeaderText">
        <h3
          style={{
            color: '#9D9A9A',
          }}
        >
          YOUR FEEFO SUPPORT CONTACT
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div className="Initial">{data.name.charAt(0)}</div>
          <div style={{ textAlign: 'left' }}>
            <span>
              <b>{data.name}</b>
            </span>
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faEnvelope} /> {data.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  supportContact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Header;
