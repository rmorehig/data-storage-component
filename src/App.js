import React from 'react'

function App() {
  return (
    <main>
      <div className="container">
        <div className="actions">
          <img src="/images/logo.svg" alt="logo" />
          <div>
            <div className="icon">
              <img src="/images/icon-document.svg" alt="document" />
            </div>
            <div className="icon">
              <img src="/images/icon-folder.svg" alt="folder" />
            </div>
            <div className="icon">
              <img src="/images/icon-upload.svg" alt="upload" />
            </div>
          </div>
        </div>
        <div className="storage">
          <p>
            You've used <span>815 GB</span> of your storage
          </p>
          <div>
            <div className="bar">
              <div className="used">
                <div className="oval" />
              </div>
            </div>
            <div className="minmax">
              <span>0 GB</span>
              <span>1000 GB</span>
            </div>
          </div>
          <div className="left">
            <p>
              <span>185</span>GB LEFT
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
