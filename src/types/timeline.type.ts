import { Brief } from './brief.type'

export interface RootTimeLine {
  countryregion: string
  lastupdate: string
  location: Location
  countrycode: Countrycode
  timeseries: Timeseries
}

export interface Location {
  lat: number
  lng: number
}

export interface Countrycode {
  iso2: string
  iso3: string
}

export interface Timeseries {
  '1/22/20': Brief
  '1/23/20': Brief
  '1/24/20': Brief
  '1/25/20': Brief
  '1/26/20': Brief
  '1/27/20': Brief
  '1/28/20': Brief
  '1/29/20': Brief
  '1/30/20': Brief
  '1/31/20': Brief
  '2/1/20': Brief
  '2/2/20': Brief
  '2/3/20': Brief
  '2/4/20': Brief
  '2/5/20': Brief
  '2/6/20': Brief
  '2/7/20': Brief
  '2/8/20': Brief
  '2/9/20': Brief
  '2/10/20': Brief
  '2/11/20': Brief
  '2/12/20': Brief
  '2/13/20': Brief
  '2/14/20': Brief
  '2/15/20': Brief
  '2/16/20': Brief
  '2/17/20': Brief
  '2/18/20': Brief
  '2/19/20': Brief
  '2/20/20': Brief
  '2/21/20': Brief
  '2/22/20': Brief
  '2/23/20': Brief
  '2/24/20': Brief
  '2/25/20': Brief
  '2/26/20': Brief
  '2/27/20': Brief
  '2/28/20': Brief
  '2/29/20': Brief
  '3/1/20': Brief
  '3/2/20': Brief
  '3/3/20': Brief
  '3/4/20': Brief
  '3/5/20': Brief
  '3/6/20': Brief
  '3/7/20': Brief
  '3/8/20': Brief
  '3/9/20': Brief
  '3/10/20': Brief
  '3/11/20': Brief
  '3/12/20': Brief
  '3/13/20': Brief
  '3/14/20': Brief
  '3/15/20': Brief
  '3/16/20': Brief
  '3/17/20': Brief
  '3/18/20': Brief
  '3/19/20': Brief
  '3/20/20': Brief
  '3/21/20': Brief
  '3/22/20': Brief
  '3/23/20': Brief
  '3/24/20': Brief
  '3/25/20': Brief
  '3/26/20': Brief
  '3/27/20': Brief
  '3/28/20': Brief
  '3/29/20': Brief
  '3/30/20': Brief
  '3/31/20': Brief
  '4/1/20': Brief
  '4/2/20': Brief
  '4/3/20': Brief
  '4/4/20': Brief
  '4/5/20': Brief
  '4/6/20': Brief
  '4/7/20': Brief
  '4/8/20': Brief
  '4/9/20': Brief
  '4/10/20': Brief
  '4/11/20': Brief
  '4/12/20': Brief
  '4/13/20': Brief
  '4/14/20': Brief
  '4/15/20': Brief
  '4/16/20': Brief
  '4/17/20': Brief
  '4/18/20': Brief
  '4/19/20': Brief
  '4/20/20': Brief
  '4/21/20': Brief
  '4/22/20': Brief
  '4/23/20': Brief
  '4/24/20': Brief
  '4/25/20': Brief
  '4/26/20': Brief
  '4/27/20': Brief
  '4/28/20': Brief
  '4/29/20': Brief
  '4/30/20': Brief
  '5/1/20': Brief
  '5/2/20': Brief
  '5/3/20': Brief
  '5/4/20': Brief
  '5/5/20': Brief
  '5/6/20': Brief
  '5/7/20': Brief
  '5/8/20': Brief
  '5/9/20': Brief
  '5/10/20': Brief
  '5/11/20': Brief
  '5/12/20': Brief
  '5/13/20': Brief
  '5/14/20': Brief
  '5/15/20': Brief
  '5/16/20': Brief
  '5/17/20': Brief
  '5/18/20': Brief
  '5/19/20': Brief
  '5/20/20': Brief
  '5/21/20': Brief
  '5/22/20': Brief
  '5/23/20': Brief
  '5/24/20': Brief
  '5/25/20': Brief
  '5/26/20': Brief
  '5/27/20': Brief
  '5/28/20': Brief
  '5/29/20': Brief
  '5/30/20': Brief
  '5/31/20': Brief
  '6/1/20': Brief
  '6/2/20': Brief
  '6/3/20': Brief
  '6/4/20': Brief
  '6/5/20': Brief
  '6/6/20': Brief
  '6/7/20': Brief
  '6/8/20': Brief
  '6/9/20': Brief
  '6/10/20': Brief
  '6/11/20': Brief
  '6/12/20': Brief
  '6/13/20': Brief
  '6/14/20': Brief
  '6/15/20': Brief
  '6/16/20': Brief
  '6/17/20': Brief
  '6/18/20': Brief
  '6/19/20': Brief
  '6/20/20': Brief
  '6/21/20': Brief
  '6/22/20': Brief
  '6/23/20': Brief
  '6/24/20': Brief
  '6/25/20': Brief
  '6/26/20': Brief
  '6/27/20': Brief
  '6/28/20': Brief
  '6/29/20': Brief
  '6/30/20': Brief
  '7/1/20': Brief
  '7/2/20': Brief
  '7/3/20': Brief
  '7/4/20': Brief
  '7/5/20': Brief
  '7/6/20': Brief
  '7/7/20': Brief
  '7/8/20': Brief
  '7/9/20': Brief
  '7/10/20': Brief
  '7/11/20': Brief
  '7/12/20': Brief
  '7/13/20': Brief
  '7/14/20': Brief
  '7/15/20': Brief
  '7/16/20': Brief
  '7/17/20': Brief
  '7/18/20': Brief
  '7/19/20': Brief
  '7/20/20': Brief
  '7/21/20': Brief
  '7/22/20': Brief
  '7/23/20': Brief
  '7/24/20': Brief
  '7/25/20': Brief
  '7/26/20': Brief
  '7/27/20': Brief
  '7/28/20': Brief
  '7/29/20': Brief
  '7/30/20': Brief
  '7/31/20': Brief
  '8/1/20': Brief
  '8/2/20': Brief
  '8/3/20': Brief
  '8/4/20': Brief
  '8/5/20': Brief
  '8/6/20': Brief
  '8/7/20': Brief
  '8/8/20': Brief
  '8/9/20': Brief
  '8/10/20': Brief
  '8/11/20': Brief
  '8/12/20': Brief
  '8/13/20': Brief
  '8/14/20': Brief
  '8/15/20': Brief
  '8/16/20': Brief
  '8/17/20': Brief
  '8/18/20': Brief
  '8/19/20': Brief
  '8/20/20': Brief
  '8/21/20': Brief
  '8/22/20': Brief
  '8/23/20': Brief
  '8/24/20': Brief
  '8/25/20': Brief
  '8/26/20': Brief
  '8/27/20': Brief
  '8/28/20': Brief
  '8/29/20': Brief
  '8/30/20': Brief
  '8/31/20': Brief
  '9/1/20': Brief
  '9/2/20': Brief
  '9/3/20': Brief
  '9/4/20': Brief
  '9/5/20': Brief
  '9/6/20': Brief
  '9/7/20': Brief
  '9/8/20': Brief
  '9/9/20': Brief
  '9/10/20': Brief
  '9/11/20': Brief
  '9/12/20': Brief
  '9/13/20': Brief
  '9/14/20': Brief
  '9/15/20': Brief
  '9/16/20': Brief
  '9/17/20': Brief
  '9/18/20': Brief
  '9/19/20': Brief
  '9/20/20': Brief
  '9/21/20': Brief
  '9/22/20': Brief
  '9/23/20': Brief
  '9/24/20': Brief
  '9/25/20': Brief
  '9/26/20': Brief
  '9/27/20': Brief
  '9/28/20': Brief
  '9/29/20': Brief
  '9/30/20': Brief
  '10/1/20': Brief
  '10/2/20': Brief
  '10/3/20': Brief
  '10/4/20': Brief
  '10/5/20': Brief
  '10/6/20': Brief
  '10/7/20': Brief
  '10/8/20': Brief
  '10/9/20': Brief
  '10/10/20': Brief
  '10/11/20': Brief
  '10/12/20': Brief
  '10/13/20': Brief
  '10/14/20': Brief
  '10/15/20': Brief
  '10/16/20': Brief
  '10/17/20': Brief
  '10/18/20': Brief
  '10/19/20': Brief
  '10/20/20': Brief
  '10/21/20': Brief
  '10/22/20': Brief
  '10/23/20': Brief
  '10/24/20': Brief
  '10/25/20': Brief
  '10/26/20': Brief
  '10/27/20': Brief
  '10/28/20': Brief
  '10/29/20': Brief
  '10/30/20': Brief
  '10/31/20': Brief
  '11/1/20': Brief
  '11/2/20': Brief
  '11/3/20': Brief
  '11/4/20': Brief
  '11/5/20': Brief
  '11/6/20': Brief
  '11/7/20': Brief
  '11/8/20': Brief
  '11/9/20': Brief
  '11/10/20': Brief
  '11/11/20': Brief
  '11/12/20': Brief
  '11/13/20': Brief
  '11/14/20': Brief
  '11/15/20': Brief
  '11/16/20': Brief
  '11/17/20': Brief
  '11/18/20': Brief
  '11/19/20': Brief
  '11/20/20': Brief
  '11/21/20': Brief
  '11/22/20': Brief
  '11/23/20': Brief
  '11/24/20': Brief
  '11/25/20': Brief
  '11/26/20': Brief
  '11/27/20': Brief
  '11/28/20': Brief
  '11/29/20': Brief
  '11/30/20': Brief
  '12/1/20': Brief
  [key: string]: Brief
}