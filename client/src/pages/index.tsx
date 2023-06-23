import Image from 'next/image'
import { Inter } from 'next/font/google'



export default function Home() {
  let aux: Array<any> = []
  const geData = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()
    aux = data
    console.log(data)
    console.log('aux')
    console.log(aux)
  }
  return (
    <main
      className={`flex items-center justify-center p-24`}
    >
      <button className='bg-slate-500 text-white uppercase px-5 py-4' onClick={geData}>onClick</button>
      <div className='text-white'>
        {aux.map((data, index) =>(
          <h1 key={index}>{data.toString()}</h1>
        ))}
      </div>
    </main>
  )
}
