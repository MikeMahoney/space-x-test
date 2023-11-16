import React, { useState } from 'react'
import './MissionsStyles.scss'
import { ThreeDots } from 'react-loader-spinner'
import { getMissions } from 'hooks/missionsHooks'
import Mission from './components/Mission/Mission'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import Payload from './components/Payload/Payload'

const Home: React.FC = () => {
  const { missions, isMissionsLoading } = getMissions()
  const [selectedPayloadId, setSelectedPayloadId] = useState<string | null>(null)

  const onClickPayload = (payloadId: string): void => {
    setSelectedPayloadId(payloadId)
  }

  const onCloseModal = (): void => {
    setSelectedPayloadId(null)
  }

  return (
    <div className='missions'>
      {isMissionsLoading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='white'
          ariaLabel='three-dots-loading'
          visible={true}
        />
      ) : missions.length === 0 ? (
        <h2 className='missions__blank'>{'No missions returned'}</h2>
      ) : (
        <div className='missions__list'>
          {missions.map((mission, index) => (
            <Mission key={index} mission={mission} onClickPayload={onClickPayload} />
          ))}
        </div>
      )}
      <Modal open={selectedPayloadId !== null} onClose={onCloseModal} center>
        {selectedPayloadId != null && <Payload payloadId={selectedPayloadId} />}
      </Modal>
    </div>
  )
}

export default Home
