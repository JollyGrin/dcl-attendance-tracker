import { executeTask } from '@dcl/sdk/ecs'
import {} from '@dcl/sdk/math'
import { onEnterScene, onLeaveScene } from '@dcl/sdk/src/players'
import { postRecord } from './fetch'

export function attendanceLogger() {
  onEnterScene((player) => {
    if (!player) return

    executeTask(async () => {
      await postRecord(player.userId, 'ENTER')
      console.log('DEBUG: ENTER', player.userId, player)
    })
  })

  onLeaveScene((userId) => {
    if (!userId) return

    executeTask(async () => {
      await postRecord(userId, 'EXIT')
      console.log('DEBUG: EXIT', userId)
    })
  })
}
