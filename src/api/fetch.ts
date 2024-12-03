const baseUrl = 'http://localhost:8080'
export async function postRecord(
  address: string,
  status: 'ENTER' | 'EXIT'
): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}/api/attendance/record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address,
        metaverse: 'dcl',
        location: '137,-2',
        entrance_status: status
      })
    })

    if (response.ok) {
      const responseBody = await response.json()
      return responseBody.access_token
    } else {
      throw new Error(`Server responded with a ${response.status} status code`)
    }
  } catch (error) {
    throw new Error(error as string)
  }
}
