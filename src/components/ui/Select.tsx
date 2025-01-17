import React, { FC, useState, useRef, useEffect } from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, placeholder = "Select...", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleSelect(options[highlightedIndex].value);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        className="border border-gray-300 p-2 rounded-md w-full text-left"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
      </button>
      {isOpen && (
        <ul
          className="absolute bg-white border border-gray-300 rounded-md mt-1 shadow-lg w-full max-h-60 overflow-auto"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${highlightedIndex === index ? 'bg-gray-200' : ''}`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};