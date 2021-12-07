import {useState, useEffect} from 'react'

import MapContainer from '../components/MapContainer'


const SchoolSearch = () => {



  const [schoolResults, setSchoolResults] = useState([])
  const [allSchools, setAllSchools] = useState(null)

  const [searchValue, setSearchValue] = useState('')
  const handleChange = (e) => setSearchValue(e.target.value)

  const getSchools = (e) => {
    e.preventDefault()
    var namelist = allSchools.results.filter((school) => school.school.name.toLowerCase().includes(searchValue.toLowerCase()))
    setSearchValue('')

    setSchoolResults(namelist)

  }






  useEffect(() => {
    fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=VINA0bRRVnhERk6u4Jy658pqkOdL43glv4soPcPi")
      .then(res => {
        return res.json()
      })
      .then(data => setAllSchools(data))

  }, [])



  return(
    <div id='form-container'>

      <form onSubmit={getSchools}>
        <label>Search for a school </label>
        <input type='text' value={searchValue} onChange={handleChange}/>
      </form>


      <div>{(schoolResults.length==0) && <p>No Results</p> }</div>

      <div className='results-container'>
        {schoolResults.map((school) => (
          <div key={school.id} className='list-container'>
            <div className='name-container'>
              <h1>{school.school.name}</h1>
            </div>

            <div className='map-container'>
              <MapContainer loc={school.location}/>

            </div>

          </div>
        ))}
      </div>


    </div>

  )


}
export default SchoolSearch
