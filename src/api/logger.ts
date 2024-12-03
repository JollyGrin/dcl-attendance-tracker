import { executeTask } from '@dcl/sdk/ecs'
import {} from '@dcl/sdk/math'
import { onEnterScene, onLeaveScene } from '@dcl/sdk/src/players'
import { postRecord } from './fetch'

export function attendanceLogger() {
  onEnterScene((player) => {
    if (!player) return

    executeTask(async () => {
      let data = await postRecord(player.userId, 'ENTER')
      console.log('ENTER', data)
    })

    // rest of the code keeps being executed
    console.log('ENTERED SCENE', player)
  })

  onLeaveScene((userId) => {
    if (!userId) return

    executeTask(async () => {
      let data = await postRecord(userId, 'EXIT')
      console.log('EXIT', data)
    })

    console.log('LEFT SCENE', userId)
  })
}
