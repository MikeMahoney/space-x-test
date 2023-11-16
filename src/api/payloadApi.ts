import axios, { AxiosError, type AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

export type TPayload = {
  payload_id: string
  norad_id: number[]
  reused: boolean
  customers: string[]
  nationality: string
  manufacturer: string
  payload_type: string
  payload_mass_kg: number
  payload_mass_lbs: number
  orbit: string
}

export const fetchPayload = async (payloadId: string): Promise<TPayload | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.spacexdata.com/v3/payloads/${payloadId}`
    )

    const responseData: TPayload = response.data

    return responseData
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error(`Error: ${error.message}`)
    } else {
      toast.error('Error: Fetching payload')
    }
  }
}
