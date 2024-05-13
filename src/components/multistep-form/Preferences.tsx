import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { FormField, FormItem, FormLabel, FormDescription, FormControl } from '../ui/form'
import { Switch } from '../ui/switch'
import Link from 'next/link'

const Preferences = ({ form }: { form: any }) => {
  return (
    <Card className="border-0 px-auto w-md">
      <CardHeader>
        <CardTitle className="text-xl">Preferences</CardTitle>
        <CardDescription>
          Set your account preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">

          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="notification"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Email Notifications</FormLabel>
                    <FormDescription>
                      Receive emails about new designs in community.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        A Agree to the <Link className='underline' href="#">Privacy Policy</Link>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Preferences