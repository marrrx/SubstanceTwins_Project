
import useStore from "../hooks/useStore"

export default function categories_sidebar({ category }) {
  
  const{handleClickCategory, actualCategory}= useStore();

    const { id, name } = category
  
 
  return (
    <li className="nav-item">
      <button 
      className="nav-link"
      type="button"
      onClick={()=>handleClickCategory(id)}
      data-bs-dismiss="offcanvas"      >
        {name}
      </button>
    </li>

  )
}
