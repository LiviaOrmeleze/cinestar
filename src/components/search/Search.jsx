import styles from './Search.module.css'

const Search = (props) => {
    const handleKeyPress= (e) => {
        e.key === "Enter" && props.searchMovies(props.search)
      }
      
  return (
   <div className='search w-25 ms-auto d-flex align-items-center justify-content-center p-3 rounded-3'  >
           <img onClick={() => props.searchMovies(props.search)} src={props.lupa} alt="" />
         <input className='w-25 border-0'
         onKeyDown={handleKeyPress} 
         onChange={(e)=>props.setSearch(e.target.value)} type="text" placeholder='Pesquisar' />
         </div>
  )
}

export default Search
