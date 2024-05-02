import PropTypes from 'prop-types';
import React from 'react';
import Header from '../header/header';
import Sales from '../sales/sales';
import './account-overview.css';

export const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <Header data={data.supportContact}></Header>
      <Sales data={data.salesOverview}></Sales>
    </div>
  );
};

AccountOverview.propTypes = {
  supportContact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
    lastUploadDate: PropTypes.number,
  }),
};

export default AccountOverview;
