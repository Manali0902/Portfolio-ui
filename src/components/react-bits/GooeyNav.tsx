import React, { useRef, useState } from 'react';
import './GooeyNav.css';

interface GooeyNavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
  onItemClick?: (item: GooeyNavItem, index: number) => void;
  className?: string;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  initialActiveIndex = -1,
  onItemClick,
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    if (index === activeIndex) return;
    setActiveIndex(index);
    onItemClick?.(items[index], index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as any, index);
    }
  };

  return (
    <div ref={containerRef} className={`gooey-nav-container ${className}`}>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              ref={el => { itemRefs.current[index] = el; }}
              className={activeIndex === index ? 'active' : ''}
              tabIndex={0}
              role="button"
              onClick={e => handleClick(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
            >
              <a href={item.href} onClick={e => e.preventDefault()}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
