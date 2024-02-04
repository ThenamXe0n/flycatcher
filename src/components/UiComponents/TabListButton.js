import React from 'react'

const TabListButton = ({title,icon,active}) => {
  return (
    <button
              className={`nav-link ${active} w-full  icon_heading_align_center`}
            >
              <span>
                <i>{icon}</i>
              </span>
              {title}
            </button>
  )
}

export default TabListButton