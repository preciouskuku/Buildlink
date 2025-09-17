import React from "react";



const Filter = () => {
//   const [expandedCard, setExpandedCard] = useState(null);
  const [cropFilter, setCropFilter] = useState(null);
  const [pathogenFilter, setPathogenFilter] = useState(null);
  const [showCropDropdown, setShowCropDropdown] = useState(false);
  const [showPathogenDropdown, setShowPathogenDropdown] = useState(false);



  return (
    <section className="library-section">
      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>

        {/* Crop Dropdown */}
        <div className="dropdown-container">
          <button className="filter-btn" onClick={() => setShowCropDropdown(!showCropDropdown)}>
            Filter by crop <ChevronDown size={16} />
          </button>
          {showCropDropdown && (
            <ul className="dropdown-list">
              {crops.map(crop => (
                <li key={crop} onClick={() => {
                  setCropFilter(crop);
                  setShowCropDropdown(false);
                }}>{crop}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Pathogen Dropdown */}
        <div className="dropdown-container">
          <button className="filter-btn" onClick={() => setShowPathogenDropdown(!showPathogenDropdown)}>
            Filter by pathogen <ChevronDown size={16} />
          </button>
          {showPathogenDropdown && (
            <ul className="dropdown-list">
              {pathogens.map(pathogen => (
                <li key={pathogen} onClick={() => {
                  setPathogenFilter(pathogen);
                  setShowPathogenDropdown(false);
                }}>{pathogen}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Filter Tags */}
      <div className="filter-tags">
        <span className="results-count">96 results found</span>
        {cropFilter && (
          <div className="tag">
            <span role="img">🥬</span> {cropFilter}
            <X size={14} className="close" onClick={() => setCropFilter(null)} />
          </div>
        )}
        {pathogenFilter && (
          <div className="tag">
            <span role="img">🦠</span> {pathogenFilter}
            <X size={14} className="close" onClick={() => setPathogenFilter(null)} />
          </div>
        )}
      </div>
      </section>
  );
};

export default Filter;