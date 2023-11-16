import React from 'react'
import './PayloadStyles.scss'
import { getPayload } from 'hooks/payloadHooks'
import { ThreeDots } from 'react-loader-spinner'

interface IPayload {
  payloadId: string
}

const Payload: React.FC<IPayload> = ({ payloadId }: IPayload) => {
  const { payload, isPayloadLoading } = getPayload(payloadId)
  return (
    <div className='payload'>
      {isPayloadLoading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='black'
          ariaLabel='three-dots-loading'
          visible={true}
        />
      ) : payload === null ? (
        <h2 className='payload__blank'>{'No payload returned'}</h2>
      ) : (
        <div className='payload__details'>
          <h3>{payload.payload_id}</h3>
          <div className='payload__details__item'>
            <span>{'Customers: '}</span>
            {payload.customers.map((customer, index) => (
              <span key={index}>{customer}</span>
            ))}
          </div>
          <div className='payload__details__item'>
            <span>{'Nationality: '}</span>
            <span>{payload.nationality}</span>
          </div>
          <div className='payload__details__item'>
            <span>{'Manufacturer: '}</span>
            <span>{payload.manufacturer}</span>
          </div>
          <div className='payload__details__item'>
            <span>{'Type: '}</span>
            <span>{payload.payload_type}</span>
          </div>
          <div className='payload__details__item'>
            <span>{'Mass: '}</span>
            <span>{`${payload.payload_mass_lbs}lbs / ${payload.payload_mass_kg}kg`}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payload
