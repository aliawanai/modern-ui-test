import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Feedback = ({data}:{data:any}) => {
  return (
    <Card className="border-0 px-auto w-md">
    <CardHeader>
      <CardTitle className="text-xl">Submitted Data</CardTitle>
      <CardDescription>
        Your details
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
      <Avatar>
            <AvatarImage src={`${data.data.profile_picture}`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      {Object.entries(data.data).map(([key, value]:any) => (
        key == "profile_picture"? "" : (<p key={key}>
          <strong>{key}:</strong> {value.toString()}
        </p>)
      ))}
      {/* {JSON.stringify(data)} */}
      </div>
    </CardContent>
  </Card>
  )
}

export default Feedback