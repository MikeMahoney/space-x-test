import React from 'react'
import './MissionStyles.scss'
import { type TMission } from 'api/missionsApi'
import Collapsible from 'components/common/Collapsible/Collapsible'

interface IMission {
  mission: TMission
  onClickPayload: (payloadId: string) => void
}

const Mission: React.FC<IMission> = ({ mission, onClickPayload }: IMission) => {
  return (
    <div className='mission'>
      <h3>{mission.mission_name}</h3>
      <div className='mission__manufacturers'>
        {'Manufacturers: '}
        {mission.manufacturers.map((name, index) => (
          <span key={index}>{name}</span>
        ))}
      </div>
      <Collapsible title='Description'>
        <p>{mission.description}</p>
      </Collapsible>
      <Collapsible title='Payloads'>
        <div className='mission__payloads'>
          <span>{'Select a payload to view more details'}</span>
          <ul>
            {mission.payload_ids.map((id, index) => (
              <li
                key={index}
                className='mission__payloads__id'
                onClick={() => {
                  onClickPayload(id)
                }}
              >
                {id}
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>
      <Collapsible title='External Links'>
        <div className='mission__links'>
          <ul>
            {mission.website != null && (
              <li>
                {'Website: '}
                <a href={mission.website}>{mission.website}</a>
              </li>
            )}
            {mission.wikipedia != null && (
              <li>
                {'Wikipedia: '}
                <a href={mission.wikipedia}>{mission.wikipedia}</a>
              </li>
            )}
            {mission.twitter != null && (
              <li>
                {'Twitter: '}
                <a href={mission.twitter}>{mission.twitter}</a>
              </li>
            )}
          </ul>
        </div>
      </Collapsible>
    </div>
  )
}

export default Mission
