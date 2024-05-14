import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'

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
      {/* {data.data.map((item:any)=> {
        <div className="grid gap-2">
          {item}
        </div>
      })} */}
      {Object.entries(data.data).map(([key, value]:any) => (
        <p key={key}>
          <strong>{key}:</strong> {value.toString()}
        </p>
      ))}
      {/* {JSON.stringify(data)} */}
      </div>
    </CardContent>
  </Card>
  )
}

export default Feedback