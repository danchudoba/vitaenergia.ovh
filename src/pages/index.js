import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import data from "./data.json"

import Calculate from './components/calculate'
import Form_BMI from './components/form_BMI'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  const infoFormContent = {
    age: "no data",
    weight: "no data",
    height: "no data",
    gender: "no data",
    inches: false
  };

  const dailyProteinIntake = {
    //in grams per kg per BW
    adultMin: 0.8,
    adultMinActiv: 1.0,
    adultModActiv: 1.3,
    adultIntenseActiv: 1.6, 
    adultMaxSafe: 2,
    adultMaxTolerable: 3.5
  };

  const dailyIntakeM30yo = {
    calories: 3000,
    totalFat: 35,
    saturatedFat: 0.1,
    transFat: 0,//
    cholesterol: 0,//
    sodium: 0,//
    totalCarbohydrate: 130,
    dietetaryFiber: 33.6,
    totalSugars: 0,
    addedSugars: 0
  } 

  const weightLossPerWeek = {
    //1 to 3 pounds, p= ~2.24kg
    weightPerWeekMin: 0.005,
    weightPerWeekMax: 0.01
  };

  const FoodIntake = {
    //l
    waterFem: 2.7,
    waterMale: 3.7,

  }

  const [input, setInput] = useState("");
  const [basicInfoForm, setBasicInfoForm] = useState(infoFormContent);

  async function handleBasicInfoForm(newBasicInfoForm) {
    setBasicInfoForm({...newBasicInfoForm});
  }

  return (
    <>
      <Head>
        <title>Proper nutrion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>HOW TO: Eat. Basic knowledge of nutrition </h1>
          <h2>
            So here is how to eat properly. Based on proper research approved by healthcare institutions and scientists knowledge. Everyting is based on proper sources with bibliography of publicly available links.
          </h2>
          <p>This app is simple and doesn&apos;t weight too much. If you also don&apos;t want to weight too much than why not to see what I got here for ya. All the basic facts about proper nutrition, calculators and other stuff. Every journey begins with one step. And, well, it seems you have to do some steps, because it burns calories, ya know? Didn&apos;t you want to get in a better shape? Than don&apos;t hesitate and check your BMI.</p>
          <div>
            <Form_BMI {...basicInfoForm} handleBasicInfoForm = {handleBasicInfoForm}/>
            <Calculate {...basicInfoForm} handleBasicInfoForm = {handleBasicInfoForm}/>

            {/* <button type="button" onClick={() => router.push('/calculate')}>
              Click me
            </button> */}
          </div>
        </div>
      </main>
    </>
  )
}