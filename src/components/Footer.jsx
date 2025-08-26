import React from 'react'

const Footer = () => {
    return (
        <>
            <div id="contact" className="text-light p-3" style={{ backgroundColor: '#004080' }}>
                <div className="container text-center">
                    <p className="mb-1">&copy; 2025 InsureNow. All rights reserved.</p>
                    <p>📞 +91 9876543210 | ✉ support@insureNow.com</p>
                    <div>
                        <a href="#" className="text-light me-3">
                            Facebook
                        </a>
                        <a href="#" className="text-light me-3">
                            Twitter
                        </a>
                        <a href="#" className="text-light">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
