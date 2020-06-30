import React, { useEffect, useRef } from 'react'

const Dropdown = ({ data, field, isActive, handleClick, handleToggle }) => {
  const wrapperRef = useRef(null)

  const clickOutside = (e) => {
    if (!wrapperRef.current.contains(e.target) && isActive) {
      handleToggle(field);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  })

  return (
    <div className={isActive ? 'show-dropdown' : 'hide-dropdown'} ref={wrapperRef}>
      {data.map((value, idx) => <div className="dropdown-row" key={value + idx} onClick={handleClick}>{value}</div>)}
    </div>
  )
}

export default Dropdown