"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button';
import Stepper from './stepper';
import UserDetails from './UserDetails';
import ProfileInfo from './ProfileInfo';
import Preferences from './Preferences';
import { LoaderCircle } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormDataSchema } from '@/lib/validations';
import { Form } from '../ui/form';

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(0)

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
      profile_picture: null,
      notification: 'true',
      privacy: 'false'
    },
    mode: 'all',
  });

  function onSubmit(values: z.infer<typeof FormDataSchema>) {
    setStep(3);
    console.log(JSON.stringify(values));
    alert('hi');
  }
  return (
    <>
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2">Create Account</h1>
        <Stepper step={step} isLast={step===2} />
      </div>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
          {step === 0 ? (<UserDetails form={form} />) : ''}
          {step === 1 ? (<ProfileInfo form={form}  />) : ''}
          {(step === 2 || step === 3) ? (<Preferences form={form} />) : ''}
      </form>
      </Form>
        <div className='flex justify-center items-center gap-4'>
        <Button onClick={() => setStep(step-1)} disabled={(step!=0)? false: true} size="sm" className={`${step> 2? 'hidden': ''} w-full`}>
          Back
        </Button>
        {step<2? (
          <Button onClick={()=> setStep((step+1)<4?step+1: step)} size="sm" className="w-full">
          Next
        </Button>
        ): (
          <Button type="submit" size="sm" className="w-full">
          {step==2?'Create': (<LoaderCircle className='animate-spin' />)}
        </Button>
        )}
        
        </div>
    </>
  )
}

export default MultiStepForm