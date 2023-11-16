import axios, { AxiosError, type AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

export type TMission = {
  mission_name: string
  mission_id: string
  manufacturers: string[]
  payload_ids: string[]
  wikipedia: string
  website: string
  twitter: string
  description: string
}

export const fetchMissions = async (): Promise<TMission[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get('https://api.spacexdata.com/v3/missions')

    const responseData: TMission[] = response.data

    return responseData
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(`Error: ${error.message}`)
    } else {
      toast.error('Error: Fetching missions')
    }
  }
}
