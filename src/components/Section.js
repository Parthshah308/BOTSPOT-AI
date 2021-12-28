import React from 'react'
import Department from './Department'

const Section = () => {
return (
<>
  <div className="section">
    <div className="block">
      <h2> Who We Serve</h2>
    </div>
    <p className="sectionDesc">Botspot AI serves businesses in all major sectors,providing exceptional software
      solutions for large corporation,mid-sized and startups.we use industry specific knowledge
      and custom tailor our products to each customer's unique needs.</p>
  </div>
  <div className="departments">
    <Department department="Finance and Insurance" color="red" icon="hand-holding-usd" />
    <Department department="Healthcare" icon="heartbeat" color="rgba(199, 39, 39, 0.81)" />
    <Department department="Construction" color="rgba(128, 128, 128, 1)" icon="hammer" />
  </div>
  <div className="departments">
    <Department department="Wholesale and retail" color="#000000" icon="shopping-cart" />
    <Department department="Education" color="#248FB0" icon="user-graduate" />
    <Department department="Energy and resources" color="#E4E51C" icon="lightbulb" />
  </div>
  <div className="departments">
    <Department department="Entertainment" color="#2424D2" icon="theater-masks" />
    <Department department="Transportation" color="#E57105" icon="bus-alt" />
  </div>
</>
)
}

export default Section
