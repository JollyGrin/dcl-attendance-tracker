// We define the empty imports so the auto-complete feature works as expected.
import {} from '@dcl/sdk/math'

import { onEnterScene, onLeaveScene } from '@dcl/sdk/src/players'
import { attendanceLogger } from './api/logger'

export function main() {
  attendanceLogger()
}
