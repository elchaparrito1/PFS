import React, {useState, useEffect} from 'react'
import moment from 'moment'

const FixtureSection = ({data, error}) => {
  console.log(data)
  const [dates, setDates] = useState()

  useEffect(() => {
    const sortedDates = data?.response.sort((a, b) => new Date(a?.fixture?.date) - new Date(b?.fixture?.date))

    const newDates =  sortedDates.filter((fixture) => new Date(fixture?.fixture?.date) >= new Date())
      .map(fixture => {
        return moment(fixture?.fixture?.date).format('dddd DD MMMM YYYY')
      })

    setDates([...new Set(newDates)])
  }, [data])

  const renderThis = () => {
    return (
      <>
      <ul>
        {dates.map((date) => {
          return (
            <li key={`${date}`} className="dates-heading">
              <span className="dates-span">
                <strong>{date}</strong>
              </span>
            </li>
          )
        })}
      </ul>
      </>
      )
  }


  error && (
    <div>Oops... Something happened and the fixtures aren't available for this section!</div>
  )

  return (
    <>
      <div className="fixture-section-container">
        {dates && renderThis()}
      </div>
      <style>{`
        ul {
          padding-inline-start: 1px;  
        }
      
        .dates-heading {
          font-size: 18px;
          padding-left: 0px;
          list-style-type: none;
          letter-spacing: 1px;
          margin-bottom: 2rem;
        }
      
        .dates-span {
          box-shadow:
          inset 0 -0.1em #E32222;
        }
      `}</style> 
    </>
  )
}


export default FixtureSection