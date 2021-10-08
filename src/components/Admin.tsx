import { AxiosResponse } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { useHistory } from 'react-router'
import { Dispatch } from 'redux'
import { getData } from '../api/http'
import { logOut } from '../redux/userAction'
import { Brief } from '../types/brief.type'
import { Country } from '../types/countries.type'
import { RootState } from '../types/rootState.type'
import TableData from './TableData'
import { DataChart } from '../types/dataChart.type'
import { RootTimeLine } from '../types/timeline.type'

const Admin = () => {
  const { user } = useSelector((store: RootState) => store)
  const dispatch = useDispatch<Dispatch<any>>()
  const history = useHistory()

  const [briefWorld, setBriefWorld] = useState<Brief>()
  const [countries, setCountries] = useState<Country[]>()
  const [currentCountry, setCurrentCountry] =
    useState<Country['countryregion']>('Vietnam')
  const [briefCountries, setBriefCountries] = useState<Brief>()
  const [timeSeries, setTimeSeries] = useState<RootTimeLine[]>()
  const [dataChart, setDataChart] = useState<DataChart>()

  useEffect(() => {
    if (!user) {
      history.push('/login')
    }
  }, [user, history])

  useEffect(() => {
    getData('/api/brief')?.then((res: AxiosResponse<{ brief: Brief }>) =>
      setBriefWorld(res.data.brief)
    )

    getData('/api/countries')?.then(
      (res: AxiosResponse<{ countries: Country[] }>) =>
        setCountries(res.data.countries)
    )

    getData('/api/timeseries')?.then((res: AxiosResponse<any>) => {
      setTimeSeries(res.data.timeseries)
    })
  }, [])

  useEffect(() => {
    const finded = countries?.find(
      country =>
        country.countryregion.toLowerCase() === currentCountry.toLowerCase()
    )

    if (finded) {
      const dataBrief: Brief = {
        confirmed: finded.confirmed,
        deaths: finded.deaths,
        recovered: finded.recovered
      }

      setBriefCountries(dataBrief)
    }
  }, [currentCountry, countries])

  useEffect(() => {
    createDataChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeSeries, currentCountry])

  const handleLogOut = () => {
    dispatch(logOut())
  }

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCountry(event.target.value)
  }

  const createDataChart = () => {
    if (timeSeries) {
      const timeLineCountryFined = timeSeries.find(
        (timeline: RootTimeLine) => timeline.countryregion === currentCountry
      )

      if (timeLineCountryFined) {
        const { timeseries } = timeLineCountryFined
        const labelsDate = Object.keys(timeseries)

        const confirmedList: number[] = []
        const deathsList: number[] = []
        const recoveredList: number[] = []

        for (const key in timeseries) {
          if (Object.prototype.hasOwnProperty.call(timeseries, key)) {
            confirmedList.push(timeseries[key].confirmed)
            deathsList.push(timeseries[key].deaths)
            recoveredList.push(timeseries[key].recovered)
          }
        }

        let data: DataChart = {
          labels: labelsDate,
          datasets: [
            {
              data: confirmedList,
              label: 'confirmed',
              borderColor: '#3e95cd',
              fill: false
            },
            {
              data: recoveredList,
              label: 'recovered',
              borderColor: '#c45850',
              fill: false
            },
            {
              data: deathsList,
              label: 'deaths',
              borderColor: '#8e5ea2',
              fill: false
            }
          ]
        }

        setDataChart(data)
      }
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between p-2">
        <h2>Covid Dashboard </h2>
        <span title="click to log out" onClick={handleLogOut}>
          {user && user.email}
        </span>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h3>World Wide</h3>
          {briefWorld && <TableData data={briefWorld} />}
        </div>

        <div>
          <h3>Regional</h3>
          <select value={currentCountry} onChange={handleChangeCountry}>
            {countries?.map(country => (
              <option key={country.countryregion} value={country.countryregion}>
                {country.countryregion}
              </option>
            ))}
          </select>

          {briefCountries && <TableData data={briefCountries} />}
        </div>
      </div>

      {dataChart && <Line data={dataChart} />}
    </div>
  )
}

export default Admin
