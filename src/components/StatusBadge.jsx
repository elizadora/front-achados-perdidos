// StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ status }) => {
  const base = 'px-2 py-1 text-xs font-semibold rounded-full';

  let styles;
  switch(status) {
    case 'Achado':
      styles = `${base} bg-green-100 text-green-800`;
      break;
    case 'Perdido':
      styles = `${base} bg-yellow-100 text-yellow-800`;
      break;
    case 'Em processo':
      styles = `${base} bg-blue-100 text-blue-800`;
      break;
    case 'Devolvido':
      styles = `${base} bg-purple-100 text-purple-800`;
      break;
    default:
      styles = `${base} bg-gray-100 text-gray-800`; // Default style
  }

  return <span className={styles}>{status}</span>;
};

export default StatusBadge;
