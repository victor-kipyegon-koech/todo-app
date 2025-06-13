 import React from 'react';

type Props = {
  count: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
  hasCompleted: boolean;
};

const Footer: React.FC<Props> = ({ count, filter, setFilter, clearCompleted, hasCompleted }) => (
  <div className="footer">
    <span>{count} items left</span>
    <div className="filters">
      <button type="button" onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button type="button" onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
      <button type="button" onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
    </div>
    <button type="button" onClick={clearCompleted} disabled={!hasCompleted}>Clear Completed</button>
  </div>
);

export default Footer;

