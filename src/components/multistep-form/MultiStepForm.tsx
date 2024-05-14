"use client";
import React from 'react'
import { Button } from '../ui/button';
import Stepper from './stepper';
import UserDetails from './UserDetails';
import ProfileInfo from './ProfileInfo';
import Preferences from './Preferences';
import { LoaderCircle } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from '../ui/form';
import { useAppContext } from '@/context/AppContext';
import { FormDataSchema } from '@/lib/validations';
import Feedback from './Feedback';

const MultiStepForm = () => {
  const { step, setStep, user, data, setData, setUser, profile, setProfile, preference, setPreference, resetForm } = useAppContext();

  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      bio: profile.bio,
      // profile_picture: profile.profile_picture,
      notification: preference.notification,
      privacy: preference.privacy,
    },
    mode: 'all',
  });

  async function onSubmit(values: any) {
    // Creating FormData object
    alert(JSON.stringify(values));
    setStep(3);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('bio', values.bio);
    // formData.append('profile_picture', values.profile_picture[0]); // Assuming profile_picture is a File
    formData.append('notification', values.notification.toString());
    formData.append('privacy', values.privacy.toString());

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const rdata = await response.json();
        setData(rdata);
        alert('hi i am fine');
        console.log('Form submitted successfully');
        setStep(4);
      } else {
        alert('hi i am fine');
        console.error('Form submission failed');
      }
    } catch (error) {
      alert(JSON.stringify(error))
      console.error('Network error:', error);
    }
  }

  async function onNext() {
    let valid = false;
    if (step === 0) {
      valid = await form.trigger(["name", "email", "password"]);
    } else if (step === 1) {
      valid = await form.trigger(["bio"]);
    } else if (step === 2) {
      valid = await form.trigger(["notification", "privacy"]);
    }

    if (valid) {
      setStep(step + 1);
    }
  }
  return (
    <>
      <div className="text-center">
        <h1 className="text-xl font-semibold mb-2">Create Account</h1>
        <Stepper step={step} isLast={step === 2} />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          {step === 0 ? (<UserDetails form={form} />) : ''}
          {step === 1 ? (<ProfileInfo form={form} />) : ''}
          {(step === 2 || step === 3) ? (<Preferences form={form} />) : ''}
          {(step === 4) ? (<Feedback data={data} />) : ''}


          <div className='flex justify-center items-center gap-4'>
            <Button onClick={() => setStep(step - 1)} disabled={(step != 0) ? false : true} size="sm" className={`${step > 2 ? 'hidden' : ''} w-full`}>
              Back
            </Button>
            {step < 2 ? (
              <Button onClick={onNext} size="sm" className="w-full">
                Next
              </Button>
            ) : (step > 2 ? (step === 3 ? (<Button size="sm" className="w-full"><LoaderCircle className='animate-spin' /></Button>) : (<Button size="sm" className="w-full" onClick={()=> {form.reset(); resetForm();}} >Reset</Button>)) : (<Button type="submit" size="sm" className="w-full">Create</Button>))

            }
          </div>
        </form>
      </Form>
    </>
  )
}

export default MultiStepForm