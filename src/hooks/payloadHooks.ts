import { fetchPayload, type TPayload } from 'api/payloadApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TPayloadHooks = {
  payload: TPayload | null
  isPayloadLoading: boolean
}

// Get payload by payloadId
export const getPayload = (payloadId: string): TPayloadHooks => {
  const [payload, setPayload] = useState<TPayload | null>(null)
  const [isPayloadLoading, setIsPayloadLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPayload(payloadId)
      .then((data) => {
        if (data != null) {
          setPayload(data)
        }
        setIsPayloadLoading(false)
      })
      .catch(function () {
        toast.error('Error: Fetching payload')
        setIsPayloadLoading(false)
      })
  }, [])

  return {
    payload,
    isPayloadLoading
  }
}
