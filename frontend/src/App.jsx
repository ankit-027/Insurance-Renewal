import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import Navbar from './components/Navbar'
import Policy from './components/Policy'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import VerificationForm from './components/VerificationForm'
import PaymentDashboard from './components/PaymentDashBoard'
import MyPolicies from './components/MyPolicies'
import Test from './components/Test'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/mypolicies" element={<MyPolicies />} />
        <Route path="/policy/verify" element={<VerificationForm />} />
        <Route path="/payment" element={<PaymentDashboard />} />


        <Route path='/test' element={<Test />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App 