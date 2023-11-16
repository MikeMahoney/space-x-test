import { type TMission, fetchMissions } from 'api/missionsApi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TMissionsHooks = {
  missions: TMission[]
  isMissionsLoading: boolean
}

// Get the list of missions
export const getMissions = (): TMissionsHooks => {
  const [missions, setMissions] = useState<TMission[]>([])
  const [isMissionsLoading, setIsMissionsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchMissions()
      .then((data) => {
        if (data != null) {
          setMissions(data)
        }
        setIsMissionsLoading(false)
      })
      .catch(function () {
        toast.error('Error: Fetching missions')
        setIsMissionsLoading(false)
      })
  }, [])

  return {
    missions,
    isMissionsLoading
  }
}
