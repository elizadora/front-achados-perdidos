// StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status }) => {
  const base = 'px-2 py-1 text-xs font-semibold rounded-full';
  const styles = status === 'Achado'
    ? `${base} bg-green-100 text-green-800`
    : `${base} bg-yellow-100 text-yellow-800`;

  return <span className={styles}>{status}</span>;
};

export default StatusBadge;
