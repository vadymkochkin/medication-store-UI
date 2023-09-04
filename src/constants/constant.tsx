export const QUESTIONS = [
  {
    id: 'seeking_treatment',
    question: 'Are you seeking treatment for improved sexual activity',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'YES',
      },
      {
        value: 'no',
        title: 'NO',
      },
    ]
  },
  {
    id: 'vital',
    question: 'Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'YES',
      },
      {
        value: 'no',
        title: 'NO',
      },
    ]
  },
  {
    id: 'blood_pressure',
    question: 'What is your blood pressure on an average day(even when taking medication)?',
    type: 'button_selection',
    options: [
      {
        value: 'normal',
        title: 'Normal(less than 120 systolic and less than 80 diastolic)',
      },
      {
        value: 'elevated',
        title: 'Elevated(120 to 129 systolic and less than 80 diastolic)',
      },
      {
        value: 'high',
        title: 'High(130-160 systolic and between 80-100 diastolic)',
      },
      {
        value: 'uncontrolled',
        title: 'Uncontrolled(above 160 systolic OR higher than 100 diastolic)',
      },
      {
        value: 'controlled',
        title: 'Controlled with Medicine',
      },
    ]
  },
  {
    id: 'allergies',
    question: 'List medication allergies',
    type: 'textarea',
    options: []
  },
  {
    id: 'prescription',
    question: 'List all prescription medications which you take.(Disclaimer: It is very important that you list the name of each medication so your physician can make sure there will not be any drug interactions).',
    type: 'textarea',
    options: []
  },
  {
    id: 'current_medication',
    question: 'Are you currently taking any medications for erectile dysfunction or pulmonary hypertension?(Example: tadalafil, Cialis, sildenafil, Viagra, Revatio, Levitra)',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'YES',
        options: {
          id: 'current_medication_value',
          question: 'What are these medication for ED you are taking',
          type: 'textarea',
        }
      },
      {
        value: 'no',
        title: 'NO',
      },
    ]
  },
  {
    id: 'other_medical',
    question: 'Please list all other medical problems',
    type: 'textarea',
    options: []
  },
  {
    id: 'heart_attack',
    question: 'Have you ever had a heart attack? Cardiac surgery?',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'YES',
      },
      {
        value: 'no',
        title: 'NO',
      },
    ]
  },
  {
    id: 'heart_cardiac_condition',
    question: 'Do you have any heart/cardiac conditions? Arrhythmias?',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'YES',
        options: {
          id: 'heart_cardiac_condition_value',
          question: 'Please Explain, your heart/cardiac conditions',
          type: 'textarea',
        }
      },
      {
        value: 'no',
        title: 'NO',
      },
    ]
  },
  {
    id: 'nitrates',
    question: 'Do you use nitrates or any of the following medications listed below?',
    type: 'button_selection',
    options: [
      {
        value: 'any',
        title: 'Nitroglycerin in any form - as a spray, tablet, patch or ointment, Deponit, Minitran, Nitrek, Nitro-Bid, Nircot, Nitrodisc, Niro-Dur, Nitrograd, Nitroglyn, Nitrol, Nitrolingua, Nitrolingual, NitroMist, Nitrong, Nitronol, -Nitro-Par, Nitroquick, Nitro-stat, Nitrotab, Nitro-Time, Transdermal-Nitro, Medicine containing nitrates',
      },
      {
        value: 'mononitrate',
        title: 'Isolsorbide Mononitrate or Isosorbide Dinitrate(Dilatrate, Dilatrate-SR, Imdur, Ismo, Isordil, Monoket, Sorbitrate)',
      },
      {
        value: 'adempas',
        title: 'Adempas(Riociquat), which is used to treat pulmonary hypertension',
      },
      {
        value: 'none',
        title: 'None Apply',
      },
    ]
  },
  {
    id: 'recreational_drug',
    question: 'Are you currently using any of the following recreational drugs?',
    type: 'button_selection',
    options: [
      {
        value: 'popper',
        title: 'Poppers or Rush',
      },
      {
        value: 'amyl',
        title: 'Amyl Nitrate or Butyl Nitrate',
      },
      {
        value: 'methamphetamine',
        title: 'Methamphetamine(meth, speed, crystal)',
      },
      {
        value: 'cocaine',
        title: 'Cocaine',
      },
      {
        value: 'none',
        title: 'None Apply',
      },
    ]
  },
  {
    id: 'medical_issue',
    question: 'Select any of the follwing medical issues that apply',
    type: 'button_selection',
    options: [
      {
        value: 'health_not_enough',
        title: 'I have been told that I am not healthy enough to have sex',
      },
      {
        value: 'chest_breath_pain',
        title: 'Within the last year I have experienced chest pain AND/OR significant shortness of breath while undergoing exercise.',
      },
      {
        value: 'blurry',
        title: 'I have experienced unexplained blurry vision or headaches.',
      },
      {
        value: 'unable_walk',
        title: 'I am unable to walk 1 mile on a flat surface within 20 minutes',
      },
      {
        value: 'low_blood_pressure',
        title: 'I have been diagnosed with low blood pressure',
      },
      {
        value: 'none',
        title: 'None Apply',
      },
    ]
  },
  {
    id: 'confidence',
    question: 'Over the past 6 months, how do you rate your confidence that you could keep an erection?',
    type: 'button_selection',
    options: [
      {
        value: 'no',
        title: 'No confidence',
      },
      {
        value: 'fair',
        title: 'Fair Very',
      },
      {
        value: 'confidence',
        title: 'Confidence',
      },
    ]
  },
  {
    id: 'erections',
    question: 'Over the past 6 months, when you had erections with sexual stimulation, how often were your erections hard enough for penetration(entering your partner)?',
    type: 'button_selection',
    options: [
      {
        value: 'no',
        title: 'Not at all',
      },
      {
        value: 'rare',
        title: 'Rarely',
      },
      {
        value: 'often',
        title: 'Often',
      },
    ]
  },
  {
    id: 'maintain_erection',
    question: 'Over the past 6 months, during sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?',
    type: 'button_selection',
    options: [
      {
        value: 'no',
        title: 'Not difficult',
      },
      {
        value: 'moderate',
        title: 'Moderately difficult',
      },
      {
        value: 'difficult',
        title: 'Very difficult',
      },
    ]
  },
  {
    id: 'satisfactory',
    question: 'Over the past 6 months, when you attempted sexual intercourse, how often was it satisfactory for you?',
    type: 'button_selection',
    options: [
      {
        value: 'never',
        title: 'Never',
      },
      {
        value: 'rare',
        title: 'Rarely',
      },
      {
        value: 'sometime',
        title: 'Sometimes',
      },
      {
        value: 'often',
        title: 'Often',
      },
    ]
  },
  {
    id: 'anything',
    question: 'Is there anything else you would like to tell the doctor?',
    type: 'button_selection',
    options: [
      {
        value: 'yes',
        title: 'Yes',
        options: {
          id: 'additional_note',
          question: 'Please write down additional notes.',
          type: 'textarea',
          attachUpload: true,
        }
      },
      {
        value: 'no',
        title: 'No',
      },
    ]
  },
]