import logo from '../components/Images/logomainpage.jpg'


const homepage = () => {
  return (
    <div className='pt-10 space-y-3 '>
        <div className='alinhamento'>
        <h1 className='font-bold text-5xl'>Conheça nossos planos!</h1>
        </div>
        <div className='alinhamento h-96'>
        <img src={logo}></img>
        </div>
        
    </div>
  )
}

export default homepage
