import React from 'react';

const Loader = () => (
  <div>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
      Loading...
    </button>
  </div>
);
export default Loader;
