export interface DataChart {
  labels: number[] | string[]
  datasets: Dataset[]
}

export interface Dataset {
  data: number[]
  label: string
  borderColor: string
  fill: boolean
}
