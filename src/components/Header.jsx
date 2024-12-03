import logo from '../assets/logo.gif'

function Header() {
  return (
    <>
     <div className="bg-warning d-flex justify-content-center">
<img  style={{ height: '55px', width: 'auto', objectFit: 'contain', borderRadius: '50px',marginRight:'10px' }}  src={logo} alt="headerLogo" />
<h2>Rock Paper Scissors</h2>
</div>
    </>
  )
}

export default Header