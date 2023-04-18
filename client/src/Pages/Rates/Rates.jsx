import "./Rates.scss"

import { useEffect, useState } from "react"

//Data
import { data } from "./Data"


//Images
import searchIcon from "../../Assets/search.png"

const Rates = () => {


  //Filtering
  const [allItems, setAllItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [active, setActive] = useState("All")

  useEffect(() => {
    setAllItems(data)
    setFiltered(allItems)
  }, [allItems])

  useEffect(() => {
    if (active === "All") {
      setFiltered(allItems)
      return;
    }

    if (active === "Plastic") {
      const plastic = allItems.filter((item) => {
        return item.category === active
      })
      setFiltered(plastic)
    }

    if (active === "Paper") {
      const paper = allItems.filter((item) => {
        return item.category === active
      })
      setFiltered(paper)
    }

    if (active === "Metal") {
      const metal = allItems.filter((item) => {
        return item.category === active
      })
      setFiltered(metal)
    }

    if (active === "Appliances") {
      const appliances = allItems.filter((item) => {
        return item.category === active
      })
      setFiltered(appliances)
    }

    if (active === "Others") {
      const others = allItems.filter((item) => {
        return item.category === active
      })
      setFiltered(others)
    }
  }, [allItems, active])



  //Searching
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredItems = filtered.filter((item) => {
    return search.toLowerCase() === "" ? true : item.category.toLowerCase().includes(search);
  });

  return (
    <section className="rate-list">
      <div className="head">
        <h1 className="heading">Scrap Prices</h1>
        <div className="search-bar">
          <input type="text" value={search} onChange={handleChange} placeholder="Search for any category" />
          <img src={searchIcon} alt="" />
        </div>

      </div>

      <div className="filter">
        {
          filteredItems.length > 0 ? (
            <>
              <div className="filter-btn">
                <h2 className={active === "All" ? 'active' : ""} onClick={() => setActive("All")}>All</h2>
                <h2 className={active === "Plastic" ? 'active' : ""} onClick={() => setActive("Plastic")}>Plastic</h2>
                <h2 className={active === "Paper" ? 'active' : ""} onClick={() => setActive("Paper")}>Paper</h2>
                <h2 className={active === "Metal" ? 'active' : ""} onClick={() => setActive("Metal")}>Metal</h2>
                <h2 className={active === "Appliances" ? 'active' : ""} onClick={() => setActive("Appliances")}>Appliances</h2>
                <h2 className={active === "Others" ? 'active' : ""} onClick={() => setActive("Others")}>Others</h2>
              </div>


              <div className="filter-items">
                {
                  filtered.map((item) => {
                      const { id, category, content, image, data } = item;
                      return (
                        <div className="filter-data" key={id}>

                          <div className="left">
                            <h3>{category}</h3>
                            <img src={image} alt="" />
                           
                            <p>{content}</p>
                          </div>

                          <div className="right">
                            {
                              data.map((item) => {
                                const { id, name, price, icon } = item;
                                return (
                                  <div className="card" key={id}>
                                  
                                      <h4>{name}</h4>
                                    <p>₹ {price} / kg</p>
                                    {/* <img src="" alt="" /> */}
                                  </div>
                                )
                              })
                            }
                          </div>


                        </div>
                      )
                    })
                }
              </div>
            </>
          ) : (
            <p className="backup-text">Please try searching within our given categories!</p>
          )}
      </div>
    </section>
  )
}

export default Rates