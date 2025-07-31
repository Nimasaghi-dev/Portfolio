import React from 'react'

const TeamDetailsPage = async ({params}) => {
    const name = (await params).name;
  return (
    <div className='text-white text-3xl'>Team member TeamDetailsPage {name}</div>
  )
}

export default TeamDetailsPage