import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form'

const ProfileInfo = ({ form }: { form: any }) => {
  return (
    <Card className="border-0 px-auto w-md">
      <CardHeader>
        <CardTitle className="text-xl">Profile Info</CardTitle>
        <CardDescription>
          Here you can set profile info
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='lorem ipsem lorem ipsem  lorem ipsem lorem ipsem '
                      className="min-h-8 max-h-16"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          {/* <div className="grid gap-2">
          <FormField
              control={form.control}
              name="profile_picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={undefined}
                      type='file'
                      className="min-h-8 max-h-16"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileInfo