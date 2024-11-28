import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className="container pb-10">
                <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
                Location to visit</h1>
                <div className="rounded-xl">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4408228835528!2d80.25644737409797!3d13.071224987253364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526729057d021d%3A0xce0a7a11243b21c5!2sWHY%20tap!5e0!3m2!1sen!2sin!4v1727414825367!5m2!1sen!2sin"
                    frameborder="0"
                    width="100%"
                    height="360"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{borderRadius:"20px"}}>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location