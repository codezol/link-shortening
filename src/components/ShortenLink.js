import React from 'react'

function ShortenLink({original_link, short_link, id}) {
  function triggerExample1(id) {
    // get the container
    const element = document.querySelector(`.${id}`);
    console.log(element)
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
    const btn = document.querySelector(`.copy-btn.${id}`)
    btn.textContent = "Copied!"
    btn.classList.add("darker")
    //return the text in the button to copy
    setTimeout(() => {
      btn.textContent = "Copy"
      btn.classList.remove('darker')
    }, 3000)
  }
  return (
    <div className='out-put flex align-center justify-between'>
      <span className='target-link'>{original_link}</span>
        <div className='flex align-center'>
            <span className={`shorten-link ${id}`}>{short_link}</span>
            <button className={`btn btn-ouline copy-btn ${id}`} onClick={() => triggerExample1(id)}>Copy</button>
        </div>
    </div>
  )
}

export default ShortenLink
