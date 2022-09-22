import React from 'react'
import './language_select.scss'
function LanguageSelect() {
  return (
    <div className='language-select'>
        <select>
            <option value="english">English</option>
            <option value="myanmar">Myanmar</option>
            <option value="nepali">Nepali</option>

        </select>
    </div>
  )
}

export default LanguageSelect