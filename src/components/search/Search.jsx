import styles from './Search.module.css'

const Search = (props) => {
    const handleKeyPress= (e) => {
        e.key === "Enter" && props.searchMovies(props.search)
      }
      
  return (
   <div className='search ms-auto '  >
           <img onClick={() => props.searchMovies(props.search)} src={props.lupa} alt="" />
         <input 
         onKeyDown={handleKeyPress} 
         onChange={(e)=>props.setSearch(e.target.value)} type="text" placeholder='Pesquisar' />
         </div>
  )
}

export default Search
